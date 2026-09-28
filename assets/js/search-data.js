// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Projects and manuscripts in applied probability, computation, and optimization.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-tutoring",
          title: "tutoring",
          description: "Tutoring, teaching assistant, and course support experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutoring/";
          },
        },{id: "dropdown-interests",
              title: "interests",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/interests/";
              },
            },{id: "dropdown-reading",
              title: "reading",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/reading/";
              },
            },{id: "books-kim-jiyoung-born-1982",
          title: 'Kim Jiyoung, Born 1982',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-34434309/";
            },},{id: "books-pippi-longstocking",
          title: 'Pippi Longstocking',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1004088/";
            },},{id: "books-the-story-of-the-stone",
          title: 'The Story of the Stone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1007305/";
            },},{id: "books-the-water-margin-outlaws-of-the-marsh",
          title: 'The Water Margin: Outlaws of the Marsh',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1008357/";
            },},{id: "books-romance-of-the-three-kingdoms",
          title: 'Romance of the Three Kingdoms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1019568/";
            },},{id: "books-journey-to-the-west",
          title: 'Journey to the West',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1029553/";
            },},{id: "books-one-thousand-and-one-nights",
          title: 'One Thousand and One Nights',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1035848/";
            },},{id: "books-charlotte-39-s-web",
          title: 'Charlotte&amp;#39;s Web',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1036274/";
            },},{id: "books-the-complete-sherlock-holmes",
          title: 'The Complete Sherlock Holmes',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1040211/";
            },},{id: "books-the-complete-fairy-tales",
          title: 'The Complete Fairy Tales',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1046209/";
            },},{id: "books-stray-birds",
          title: 'Stray Birds',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1058661/";
            },},{id: "books-stories-of-the-sahara",
          title: 'Stories of the Sahara',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1060068/";
            },},{id: "books-the-old-man-and-the-sea",
          title: 'The Old Man and the Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1064275/";
            },},{id: "books-gone-with-the-wind",
          title: 'Gone with the Wind',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1068920/";
            },},{id: "books-the-great-gatsby",
          title: 'The Great Gatsby',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10738023/";
            },},{id: "books-twenty-thousand-leagues-under-the-sea",
          title: 'Twenty Thousand Leagues Under the Sea',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1085470/";
            },},{id: "books-farewell-my-concubine",
          title: 'Farewell My Concubine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1088711/";
            },},{id: "books-wuthering-heights",
          title: 'Wuthering Heights',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1119522/";
            },},{id: "books-the-complete-fairy-tales",
          title: 'The Complete Fairy Tales',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1119839/";
            },},{id: "books-jane-eyre",
          title: 'Jane Eyre',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1141406/";
            },},{id: "books-call-to-arms",
          title: 'Call to Arms',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449351/";
            },},{id: "books-dawn-blossoms-plucked-at-dusk",
          title: 'Dawn Blossoms Plucked at Dusk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449352/";
            },},{id: "books-murder-on-the-orient-express",
          title: 'Murder on the Orient Express',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1827374/";
            },},{id: "books-norwegian-wood",
          title: 'Norwegian Wood',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2159042/";
            },},{id: "books-sophie-39-s-world",
          title: 'Sophie&amp;#39;s World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2284311/";
            },},{id: "books-harry-potter-the-complete-collection",
          title: 'Harry Potter: The Complete Collection',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24531956/";
            },},{id: "books-the-miracles-of-the-namiya-general-store",
          title: 'The Miracles of the Namiya General Store',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25862578/";
            },},{id: "books-rashomon-and-seventeen-other-stories",
          title: 'Rashomon and Seventeen Other Stories',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3136271/";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3608208/";
            },},{id: "books-to-live",
          title: 'To Live',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4913064/";
            },},{id: "books-the-little-prince",
          title: 'The Little Prince',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1084336/";
            },},{id: "books-chronicle-of-a-blood-merchant",
          title: 'Chronicle of a Blood Merchant',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4760224/";
            },},{id: "books-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4908885/";
            },},{id: "books-educated",
          title: 'Educated',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-33440205/";
            },},{id: "books-the-dark-forest",
          title: 'The Dark Forest',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3066477/";
            },},{id: "books-death-39-s-end",
          title: 'Death&amp;#39;s End',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5363767/";
            },},{id: "books-pride-and-prejudice",
          title: 'Pride and Prejudice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1083428/";
            },},{id: "books-border-town",
          title: 'Border Town',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1057244/";
            },},{id: "books-the-temple-of-the-golden-pavilion",
          title: 'The Temple of the Golden Pavilion',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3391248/";
            },},{id: "books-fingersmith",
          title: 'Fingersmith',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26952166/";
            },},{id: "books-bad-kids",
          title: 'Bad Kids',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25799686/";
            },},{id: "books-perfume",
          title: 'Perfume',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1292416/";
            },},{id: "books-to-kill-a-mockingbird",
          title: 'To Kill a Mockingbird',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6781808/";
            },},{id: "books-a-moveable-feast",
          title: 'A Moveable Feast',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3393056/";
            },},{id: "books-everything-i-never-told-you",
          title: 'Everything I Never Told You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26382433/";
            },},{id: "books-the-brothers-lionheart",
          title: 'The Brothers Lionheart',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1076136/";
            },},{id: "books-i-am-a-cat",
          title: 'I Am a Cat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2046977/";
            },},{id: "books-letter-from-an-unknown-woman",
          title: 'Letter from an Unknown Woman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2154960/";
            },},{id: "books-golden-age",
          title: 'Golden Age',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1089243/";
            },},{id: "books-the-kite-runner",
          title: 'The Kite Runner',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1770782/";
            },},{id: "books-someone-to-talk-to",
          title: 'Someone to Talk To',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3633461/";
            },},{id: "books-cries-in-the-drizzle",
          title: 'Cries in the Drizzle',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20421947/";
            },},{id: "books-south-of-the-border-west-of-the-sun",
          title: 'South of the Border, West of the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1015452/";
            },},{id: "books-the-plague",
          title: 'The Plague',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24257229/";
            },},{id: "books-affinity",
          title: 'Affinity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26961102/";
            },},{id: "books-the-strange-library",
          title: 'The Strange Library',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26628823/";
            },},{id: "books-one-two-buckle-my-shoe",
          title: 'One, Two, Buckle My Shoe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26962860/";
            },},{id: "books-the-devotion-of-suspect-x",
          title: 'The Devotion of Suspect X',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25924253/";
            },},{id: "books-confessions",
          title: 'Confessions',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26681984/";
            },},{id: "books-newcomer",
          title: 'Newcomer',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6746289/";
            },},{id: "books-orphan-train",
          title: 'Orphan Train',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26349261/";
            },},{id: "books-harry-potter-and-the-sorcerer-39-s-stone",
          title: 'Harry Potter and the Sorcerer&amp;#39;s Stone',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1041007/";
            },},{id: "books-anne-of-green-gables",
          title: 'Anne of Green Gables',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1064841/";
            },},{id: "books-the-little-mermaid-and-other-fairy-tales",
          title: 'The Little Mermaid and Other Fairy Tales',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1765512/";
            },},{id: "books-robinson-crusoe",
          title: 'Robinson Crusoe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1893466/";
            },},{id: "books-heidi",
          title: 'Heidi',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1912993/";
            },},{id: "books-harry-potter-and-the-deathly-hallows",
          title: 'Harry Potter and the Deathly Hallows',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2295163/";
            },},{id: "books-the-unlikely-pilgrimage-of-harold-fry",
          title: 'The Unlikely Pilgrimage of Harold Fry',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24934182/";
            },},{id: "books-zoo",
          title: 'ZOO',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2297697/";
            },},{id: "books-the-courage-to-be-disliked",
          title: 'The Courage to Be Disliked',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26369699/";
            },},{id: "books-ferryman",
          title: 'Ferryman',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26356948/";
            },},{id: "books-the-complete-grimm-39-s-fairy-tales",
          title: 'The Complete Grimm&amp;#39;s Fairy Tales',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1043008/";
            },},{id: "books-foundation",
          title: 'Foundation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1258490/";
            },},{id: "books-wandering",
          title: 'Wandering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449348/";
            },},{id: "books-wild-grass",
          title: 'Wild Grass',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1915958/";
            },},{id: "books-the-enneagram",
          title: 'The Enneagram',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1927902/";
            },},{id: "books-flow",
          title: 'Flow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27186106/";
            },},{id: "books-father-and-son",
          title: 'Father and Son',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1427538/";
            },},{id: "books-no-longer-human",
          title: 'No Longer Human',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4259314/";
            },},{id: "books-the-count-of-monte-cristo",
          title: 'The Count of Monte Cristo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1085860/";
            },},{id: "books-bronze-and-sunflower",
          title: 'Bronze and Sunflower',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1318622/";
            },},{id: "books-the-devotion-of-suspect-x",
          title: 'The Devotion of Suspect X',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3211779/";
            },},{id: "books-salvation-of-a-saint",
          title: 'Salvation of a Saint',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6784976/";
            },},{id: "books-becoming",
          title: 'Becoming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30232128/";
            },},{id: "books-the-neurotic-personality-of-our-time",
          title: 'The Neurotic Personality of Our Time',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6511362/";
            },},{id: "books-journey-under-the-midnight-sun",
          title: 'Journey Under the Midnight Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10554308/";
            },},{id: "books-predictably-irrational",
          title: 'Predictably Irrational',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27599381/";
            },},{id: "books-counselling-for-toads",
          title: 'Counselling for Toads',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35143790/";
            },},{id: "books-the-waves",
          title: 'The Waves',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10605850/";
            },},{id: "books-orlando",
          title: 'Orlando',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1415226/";
            },},{id: "books-to-the-lighthouse",
          title: 'To the Lighthouse',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3402999/";
            },},{id: "books-naoko",
          title: 'Naoko',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27115970/";
            },},{id: "books-the-three-body-problem",
          title: 'The Three-Body Problem',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2567698/";
            },},{id: "books-pride-and-prejudice",
          title: 'Pride and Prejudice',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1455812/";
            },},{id: "books-carol",
          title: 'Carol',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-17150345/";
            },},{id: "books-battle-royale",
          title: 'Battle Royale',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20473093/";
            },},{id: "books-the-girl-with-the-dragon-tattoo",
          title: 'The Girl with the Dragon Tattoo',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4292149/";
            },},{id: "books-remote-control",
          title: 'Remote Control',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5038409/";
            },},{id: "books-where-the-crawdads-sing",
          title: 'Where the Crawdads Sing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30303684/";
            },},{id: "books-the-da-vinci-code",
          title: 'The Da Vinci Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1040771/";
            },},{id: "books-a-little-princess",
          title: 'A Little Princess',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1803641/";
            },},{id: "books-classmates-vol-1-dou-kyu-sei",
          title: 'Classmates Vol. 1: Dou Kyu Sei',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3095638/";
            },},{id: "books-the-murder-of-roger-ackroyd",
          title: 'The Murder of Roger Ackroyd',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1807516/";
            },},{id: "books-tuck-everlasting",
          title: 'Tuck Everlasting',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20561802/";
            },},{id: "books-stories-of-the-sahara",
          title: 'Stories of the Sahara',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26997048/";
            },},{id: "books-fingersmith",
          title: 'Fingersmith',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1394285/";
            },},{id: "books-to-the-lighthouse",
          title: 'To the Lighthouse',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2067281/";
            },},{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36518892/";
            },},{id: "books-klara-and-the-sun",
          title: 'Klara and the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35113983/";
            },},{id: "books-fang-si-chi-39-s-first-love-paradise",
          title: 'Fang Si-Chi&amp;#39;s First Love Paradise',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27614904/";
            },},{id: "books-the-love-hypothesis",
          title: 'The Love Hypothesis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35606579/";
            },},{id: "books-from-the-soil",
          title: 'From the Soil',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1795079/";
            },},{id: "books-principles-of-economics",
          title: 'Principles of Economics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1028842/";
            },},{id: "books-the-inner-sky",
          title: 'The Inner Sky',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10546850/";
            },},{id: "books-the-moon-and-sixpence",
          title: 'The Moon and Sixpence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1858513/";
            },},{id: "books-the-tokyo-zodiac-murders",
          title: 'The Tokyo Zodiac Murders',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10740776/";
            },},{id: "books-the-ark",
          title: 'The Ark',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36832093/";
            },},{id: "news-i-received-the-mildred-l-sanderson-prize-for-excellence-in-mathematics-and-the-jennifer-landry-93-award-for-compassion-in-math-education-at-mount-holyoke-college",
          title: 'I received the Mildred L. Sanderson Prize for Excellence in Mathematics and the...',
          description: "",
          section: "News",},{id: "news-i-attended-women-in-mathematics-in-new-england-2025-and-presented-work-on-neural-dynamics-of-word-segmentation",
          title: 'I attended Women in Mathematics in New England 2025 and presented work on...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-nebraska-conference-for-undergraduate-wisdom-in-mathematics-on-fair-deployment-strategies-for-electric-vehicle-charging-stations",
          title: 'I gave a talk at the Nebraska Conference for Undergraduate Wisdom in Mathematics...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-hudson-river-undergraduate-mathematics-conference-on-monte-carlo-density-estimation-for-the-stochastic-nls-energy-cascade-system",
          title: 'I gave a talk at the Hudson River Undergraduate Mathematics Conference on Monte...',
          description: "",
          section: "News",},{id: "news-i-started-the-rips-2026-program-at-ucla-institute-for-pure-amp-amp-applied-mathematics-working-on-cross-spectral-image-correspondence-for-industrial-robot-perception",
          title: 'I started the RIPS 2026 program at UCLA,Institute for Pure &amp;amp;amp; Applied Mathematics,...',
          description: "",
          section: "News",},{id: "projects-costly-cooperative-behavior",
          title: 'Costly Cooperative Behavior',
          description: "ODE and agent-based simulations for costly cooperation, kin recognition, and group selection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/altruism-simulation/";
            },},{id: "projects-cross-spectral-image-correspondence",
          title: 'Cross-Spectral Image Correspondence',
          description: "Visible-infrared feature matching and evaluation protocols for industrial robot perception.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross-spectral-correspondence/";
            },},{id: "projects-ev-charger-placement-optimization",
          title: 'EV Charger Placement Optimization',
          description: "Multi-objective optimization for fair and accessible EV charging station deployment in Seattle.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ev-optimization/";
            },},{id: "projects-kepler-sde-numerical-diagnostics",
          title: 'Kepler/SDE Numerical Diagnostics',
          description: "Numerical experiments for stochastic differential equations and nonlinear dynamics diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/kepler-sde/";
            },},{id: "projects-nls-energy-cascade",
          title: 'NLS Energy Cascade',
          description: "SIMD Monte Carlo and Fokker-Planck solvers for stochastic nonlinear Schrödinger energy cascades.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nls-energy-cascade/";
            },},{id: "projects-distal-speech-rate-effects",
          title: 'Distal Speech Rate Effects',
          description: "EEG/ERP analysis and particle-filter modeling of speech-rate-dependent word segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/speech-rate/";
            },},{id: "projects-stochastic-mobility-based-sirs-model",
          title: 'Stochastic Mobility-Based SIRS Model',
          description: "CTMC, ODE, and diffusion approximations for epidemic dynamics with mobility heterogeneity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stochastic-mobility-sirs/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%69%61%6E%67%33%37%6A@%6D%74%68%6F%6C%79%6F%6B%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jayleenjiang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jialujiang", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
