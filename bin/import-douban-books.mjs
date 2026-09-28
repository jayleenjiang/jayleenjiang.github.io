import fs from "node:fs/promises";
import path from "node:path";

const [inputPath = "/tmp/jayleen-douban-books.json"] = process.argv.slice(2);
const root = process.cwd();
const booksDir = path.join(root, "_books");
const coversDir = path.join(root, "assets", "img", "book_covers");
const editionsPath = path.join(root, "bin", "english-book-editions.json");
const notesPath = path.join(root, "bin", "english-book-notes.json");

const yamlString = (value) => JSON.stringify(value ?? "");
const normalize = (value) =>
  (value ?? "")
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();

const tokenOverlap = (left, right) => {
  const toTokens = (value) =>
    new Set(
      normalize(value)
        .split(" ")
        .filter((token) => token.length > 1),
    );
  const leftTokens = toTokens(left);
  const rightTokens = toTokens(right);
  let matches = 0;

  for (const token of leftTokens) {
    if (rightTokens.has(token)) matches += 1;
  }

  return matches / Math.max(1, Math.min(leftTokens.size, rightTokens.size));
};

const searchOpenLibrary = async (edition) => {
  const queries = [
    { title: edition.title, author: edition.author, language: "eng" },
    { q: `${edition.title} ${edition.author}` },
  ];
  const documents = [];

  for (const query of queries) {
    const url = new URL("https://openlibrary.org/search.json");
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }
    url.searchParams.set(
      "fields",
      "title,author_name,language,isbn,cover_i,first_publish_year",
    );
    url.searchParams.set("limit", "20");

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "JayleenBookshelf/1.0 (personal website; https://jayleenjiang.github.io)",
      },
    });
    if (!response.ok) continue;

    const payload = await response.json();
    documents.push(...(payload.docs ?? []));
    if (documents.some((document) => document.cover_i)) break;
  }

  const candidates = documents
    .filter(
      (document) =>
        document.cover_i &&
        (!document.language || document.language.includes("eng")),
    )
    .map((document) => ({
      document,
      score:
        (normalize(document.title) === normalize(edition.title) ? 5 : 0) +
        tokenOverlap(document.title, edition.title) * 3 +
        tokenOverlap((document.author_name ?? []).join(" "), edition.author) *
          2,
    }))
    .sort((left, right) => right.score - left.score);

  if (!candidates[0] || candidates[0].score < 3.4) return null;

  const match = candidates[0].document;
  return {
    cover_url: `https://covers.openlibrary.org/b/id/${match.cover_i}-L.jpg`,
    isbn:
      match.isbn?.find((value) => /^97[89]/.test(value)) ??
      match.isbn?.[0] ??
      "",
    published: String(match.first_publish_year ?? ""),
  };
};

const resolveEdition = async (edition) => {
  if (edition.cover_url) return edition;
  const match = await searchOpenLibrary(edition);
  if (!match) {
    throw new Error(`No verified English cover found for ${edition.title}`);
  }
  return { ...match, ...edition, cover_url: match.cover_url };
};

const fetchCover = async (book, destination) => {
  const referer = book.cover_url.includes("images.macmillan.com")
    ? "https://us.macmillan.com/"
    : new URL(book.cover_url).origin;
  const response = await fetch(book.cover_url, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error(`cover returned ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1_000) {
    throw new Error("cover response was unexpectedly small");
  }

  await fs.writeFile(destination, bytes);
};

const removeGeneratedFiles = async (directory, pattern) => {
  for (const filename of await fs.readdir(directory)) {
    if (pattern.test(filename)) {
      await fs.unlink(path.join(directory, filename));
    }
  }
};

const [sourceBooks, editionOverrides, translatedNotes] = await Promise.all([
  fs.readFile(inputPath, "utf8").then(JSON.parse),
  fs.readFile(editionsPath, "utf8").then(JSON.parse),
  fs.readFile(notesPath, "utf8").then(JSON.parse),
]);
const sourceById = new Map(
  sourceBooks.map((book) => [String(book.subject_id), book]),
);

const queue = [...editionOverrides];
const resolvedEditions = [];
const resolutionFailures = [];
const resolveWorker = async () => {
  while (queue.length > 0) {
    const edition = queue.shift();
    try {
      resolvedEditions.push(await resolveEdition(edition));
    } catch (error) {
      resolutionFailures.push({ id: edition.id, error: error.message });
    }
  }
};

await Promise.all(Array.from({ length: 8 }, () => resolveWorker()));
if (resolutionFailures.length > 0) {
  for (const failure of resolutionFailures) {
    console.error(`- ${failure.id}: ${failure.error}`);
  }
  throw new Error("English edition verification failed");
}

const editionsById = new Map(
  resolvedEditions.map((edition) => [String(edition.id), edition]),
);
const books = editionOverrides.map((edition) => {
  const source = sourceById.get(String(edition.id));
  const resolved = editionsById.get(String(edition.id));
  if (!source) throw new Error(`Missing Douban record ${edition.id}`);
  return {
    ...source,
    ...resolved,
    review: translatedNotes[String(edition.id)] ?? "",
  };
});

await fs.mkdir(booksDir, { recursive: true });
await fs.mkdir(coversDir, { recursive: true });
await Promise.all([
  removeGeneratedFiles(booksDir, /^douban-\d+\.md$/),
  removeGeneratedFiles(coversDir, /^douban-\d+\.jpg$/),
]);

const failures = [];
const importQueue = [...books];
const importWorker = async () => {
  while (importQueue.length > 0) {
    const book = importQueue.shift();
    const filename = `douban-${book.id}`;
    const coverFilename = `${filename}.jpg`;
    const coverPath = path.join(coversDir, coverFilename);
    const review = book.review.trim();
    const publication = book.publisher
      ? `${book.publisher}${book.published ? ` · ${book.published}` : ""} · English edition`
      : `English-language edition${book.published ? ` · First published ${book.published}` : ""}`;
    const frontMatter = [
      "---",
      "layout: book-review",
      `title: ${yamlString(book.title)}`,
      `author: ${yamlString(book.author)}`,
      `cover: ${yamlString(`assets/img/book_covers/${coverFilename}`)}`,
      `date: ${book.date}`,
      `finished: ${book.date}`,
      `released: ${yamlString(book.published)}`,
      `isbn: ${yamlString(book.isbn)}`,
      `stars: ${book.stars}`,
      "status: finished",
      `has_review: ${review ? "true" : "false"}`,
      `douban_url: ${yamlString(book.url)}`,
      `publication: ${yamlString(publication)}`,
      "---",
      "",
    ];
    const body = review
      ? `${review}\n`
      : "No written note was added for this book.\n";

    await fs.writeFile(
      path.join(booksDir, `${filename}.md`),
      `${frontMatter.join("\n")}\n${body}`,
    );

    try {
      await fetchCover(book, coverPath);
    } catch (error) {
      failures.push({ id: book.id, error: error.message });
    }
  }
};

await Promise.all(Array.from({ length: 8 }, () => importWorker()));

console.log(`Imported ${books.length} verified English editions.`);
if (failures.length > 0) {
  console.error(`Failed to download ${failures.length} covers:`);
  for (const failure of failures) {
    console.error(`- ${failure.id}: ${failure.error}`);
  }
  process.exitCode = 1;
}
