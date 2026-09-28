import fs from "node:fs/promises";
import path from "node:path";

const [inputPath = "/tmp/jayleen-douban-books.json"] = process.argv.slice(2);
const root = process.cwd();
const booksDir = path.join(root, "_books");
const coversDir = path.join(root, "assets", "img", "book_covers");

const yamlString = (value) => JSON.stringify(value ?? "");

const parseAuthor = (publication) => {
  const [author = ""] = publication.split(" / ");
  return author.trim();
};

const parseReleaseYear = (publication) => {
  const years = publication.match(/(?:18|19|20)\d{2}/g);
  return years?.at(-1) ?? "";
};

const fetchCover = async (book, destination) => {
  const response = await fetch(book.cover_url, {
    headers: {
      Referer: "https://book.douban.com/",
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error(`cover returned ${response.status}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 500) {
    throw new Error("cover response was unexpectedly small");
  }

  await fs.writeFile(destination, bytes);
};

const books = JSON.parse(await fs.readFile(inputPath, "utf8"));
await fs.mkdir(booksDir, { recursive: true });
await fs.mkdir(coversDir, { recursive: true });

const failures = [];
const queue = [...books];

const worker = async () => {
  while (queue.length > 0) {
    const book = queue.shift();
    const filename = `douban-${book.subject_id}`;
    const coverFilename = `${filename}.jpg`;
    const coverPath = path.join(coversDir, coverFilename);
    const author = parseAuthor(book.publication);
    const released = parseReleaseYear(book.publication);
    const review = book.review.trim();
    const frontMatter = [
      "---",
      "layout: book-review",
      `title: ${yamlString(book.title)}`,
      `author: ${yamlString(author)}`,
      `cover: ${yamlString(`assets/img/book_covers/${coverFilename}`)}`,
      `date: ${book.date}`,
      `finished: ${book.date}`,
      `released: ${yamlString(released)}`,
      `stars: ${book.stars}`,
      "status: finished",
      `has_review: ${review ? "true" : "false"}`,
      `douban_url: ${yamlString(book.url)}`,
      `publication: ${yamlString(book.publication)}`,
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
      failures.push({ id: book.subject_id, error: error.message });
    }
  }
};

await Promise.all(Array.from({ length: 8 }, () => worker()));

console.log(`Imported ${books.length} books.`);
if (failures.length > 0) {
  console.error(`Failed to download ${failures.length} covers:`);
  for (const failure of failures) {
    console.error(`- ${failure.id}: ${failure.error}`);
  }
  process.exitCode = 1;
}
