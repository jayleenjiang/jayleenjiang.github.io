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
            },{id: "books-82年生的金智英",
          title: '82年生的金智英',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-34434309/";
            },},{id: "books-胭脂扣",
          title: '胭脂扣',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25737039/";
            },},{id: "books-长袜子皮皮",
          title: '长袜子皮皮',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1004088/";
            },},{id: "books-红楼梦",
          title: '红楼梦',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1007305/";
            },},{id: "books-水浒传-全二册",
          title: '水浒传（全二册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1008357/";
            },},{id: "books-三国演义-全二册",
          title: '三国演义（全二册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1019568/";
            },},{id: "books-西游记-全二册",
          title: '西游记（全二册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1029553/";
            },},{id: "books-一千零一夜",
          title: '一千零一夜',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1035848/";
            },},{id: "books-夏洛的网",
          title: '夏洛的网',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1036274/";
            },},{id: "books-福尔摩斯探案全集",
          title: '福尔摩斯探案全集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1040211/";
            },},{id: "books-安徒生童话故事集",
          title: '安徒生童话故事集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1046209/";
            },},{id: "books-飞鸟集",
          title: '飞鸟集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1058661/";
            },},{id: "books-撒哈拉的故事",
          title: '撒哈拉的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1060068/";
            },},{id: "books-老人与海",
          title: '老人与海',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1064275/";
            },},{id: "books-飘",
          title: '飘',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1068920/";
            },},{id: "books-了不起的盖茨比",
          title: '了不起的盖茨比',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10738023/";
            },},{id: "books-情书",
          title: '情书',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1080370/";
            },},{id: "books-海底两万里",
          title: '海底两万里',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1085470/";
            },},{id: "books-霸王别姬",
          title: '霸王别姬',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1088711/";
            },},{id: "books-呼啸山庄",
          title: '呼啸山庄',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1119522/";
            },},{id: "books-王尔德童话",
          title: '王尔德童话',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1119839/";
            },},{id: "books-简爱",
          title: '简爱',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1141406/";
            },},{id: "books-城南旧事-纪念普及版",
          title: '城南旧事 : 纪念普及版',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1254588/";
            },},{id: "books-呐喊",
          title: '呐喊',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449351/";
            },},{id: "books-朝花夕拾",
          title: '朝花夕拾',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449352/";
            },},{id: "books-东方快车谋杀案",
          title: '东方快车谋杀案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1827374/";
            },},{id: "books-雨季不再来",
          title: '雨季不再来',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2136140/";
            },},{id: "books-挪威的森林",
          title: '挪威的森林',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2159042/";
            },},{id: "books-苏菲的世界",
          title: '苏菲的世界',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2284311/";
            },},{id: "books-哈利-波特",
          title: '哈利·波特',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24531956/";
            },},{id: "books-解忧杂货店",
          title: '解忧杂货店',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25862578/";
            },},{id: "books-罗生门",
          title: '罗生门',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3136271/";
            },},{id: "books-牧羊少年奇幻之旅",
          title: '牧羊少年奇幻之旅',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3608208/";
            },},{id: "books-目送",
          title: '目送',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3995526/";
            },},{id: "books-孩子你慢慢来",
          title: '孩子你慢慢来',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4207781/";
            },},{id: "books-活着",
          title: '活着',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4913064/";
            },},{id: "books-小王子",
          title: '小王子',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1084336/";
            },},{id: "books-许三观卖血记",
          title: '许三观卖血记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4760224/";
            },},{id: "books-局外人",
          title: '局外人',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4908885/";
            },},{id: "books-假如真有时光机",
          title: '假如真有时光机',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30177173/";
            },},{id: "books-你当像鸟飞往你的山",
          title: '你当像鸟飞往你的山',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-33440205/";
            },},{id: "books-温柔的夜",
          title: '温柔的夜',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2068249/";
            },},{id: "books-比利战争",
          title: '比利战争',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26390426/";
            },},{id: "books-三体-黑暗森林",
          title: '三体Ⅱ : 黑暗森林',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3066477/";
            },},{id: "books-三体-死神永生",
          title: '三体Ⅲ : 死神永生',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5363767/";
            },},{id: "books-傲慢与偏见",
          title: '傲慢与偏见',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1083428/";
            },},{id: "books-边城",
          title: '边城',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1057244/";
            },},{id: "books-金阁寺",
          title: '金阁寺',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3391248/";
            },},{id: "books-情绪猎人-我是你的守护星-2",
          title: '情绪猎人-我是你的守护星-2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10607481/";
            },},{id: "books-年华永不落幕",
          title: '年华永不落幕',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25918703/";
            },},{id: "books-指匠",
          title: '指匠',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26952166/";
            },},{id: "books-无证之罪-紫金陈-推理之王-第1部",
          title: '无证之罪 : 紫金陈“推理之王”第1部',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25799686/";
            },},{id: "books-失乐园",
          title: '失乐园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25891771/";
            },},{id: "books-香水-一个谋杀犯的故事",
          title: '香水 : 一个谋杀犯的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1292416/";
            },},{id: "books-我与地坛",
          title: '我与地坛',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1209899/";
            },},{id: "books-杀死一只知更鸟",
          title: '杀死一只知更鸟',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6781808/";
            },},{id: "books-消失的13级台阶",
          title: '消失的13级台阶',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-34996429/";
            },},{id: "books-流动的盛宴",
          title: '流动的盛宴',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3393056/";
            },},{id: "books-无声告白",
          title: '无声告白',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26382433/";
            },},{id: "books-狮心兄弟",
          title: '狮心兄弟',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1076136/";
            },},{id: "books-人间草木",
          title: '人间草木',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1253310/";
            },},{id: "books-我是猫",
          title: '我是猫',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2046977/";
            },},{id: "books-一个陌生女人的来信",
          title: '一个陌生女人的来信',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2154960/";
            },},{id: "books-梦幻花",
          title: '梦幻花',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-33427878/";
            },},{id: "books-大漠谣",
          title: '大漠谣',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1925232/";
            },},{id: "books-黄金时代-时代三部曲",
          title: '黄金时代 : 时代三部曲',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1089243/";
            },},{id: "books-追风筝的人",
          title: '追风筝的人',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1770782/";
            },},{id: "books-一句顶一万句",
          title: '一句顶一万句',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3633461/";
            },},{id: "books-在细雨中呼喊",
          title: '在细雨中呼喊',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20421947/";
            },},{id: "books-字母表谜案",
          title: '字母表谜案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35390390/";
            },},{id: "books-密室收藏家",
          title: '密室收藏家',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26348596/";
            },},{id: "books-国境以南-太阳以西",
          title: '国境以南 太阳以西',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1015452/";
            },},{id: "books-鼠疫",
          title: '鼠疫',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24257229/";
            },},{id: "books-我讓最想被擁抱的男人給威脅了-1",
          title: '我讓最想被擁抱的男人給威脅了 : 1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26262691/";
            },},{id: "books-灵契",
          title: '灵契',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26961102/";
            },},{id: "books-袭击面包店",
          title: '袭击面包店',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26264956/";
            },},{id: "books-图书馆奇谈",
          title: '图书馆奇谈',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26628823/";
            },},{id: "books-牙医谋杀案",
          title: '牙医谋杀案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26962860/";
            },},{id: "books-嫌疑人x的献身",
          title: '嫌疑人X的献身',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25924253/";
            },},{id: "books-告白",
          title: '告白',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26681984/";
            },},{id: "books-新参者-加贺探案集8",
          title: '新参者 : 加贺探案集8',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6746289/";
            },},{id: "books-孤儿列车",
          title: '孤儿列车',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26349261/";
            },},{id: "books-哈利-波特与魔法石",
          title: '哈利·波特与魔法石',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1041007/";
            },},{id: "books-草房子",
          title: '草房子',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1052990/";
            },},{id: "books-呼兰河传-1947年版本-原版珍藏",
          title: '呼兰河传 : 1947年版本・原版珍藏',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1060852/";
            },},{id: "books-绿山墙的安妮",
          title: '绿山墙的安妮',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1064841/";
            },},{id: "books-海的女儿-安徒生童话全集之一",
          title: '海的女儿 : 安徒生童话全集之一',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1765512/";
            },},{id: "books-鲁滨孙历险记",
          title: '鲁滨孙历险记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1893466/";
            },},{id: "books-海蒂-阿尔卑斯山的少女",
          title: '海蒂 : 阿尔卑斯山的少女',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1912993/";
            },},{id: "books-哈利-波特与死亡圣器",
          title: '哈利·波特与死亡圣器',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2295163/";
            },},{id: "books-骆驼祥子",
          title: '骆驼祥子',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4275017/";
            },},{id: "books-三体全集-地球往事三部曲",
          title: '三体全集 : 地球往事三部曲',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6518605/";
            },},{id: "books-一个人的朝圣",
          title: '一个人的朝圣',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24934182/";
            },},{id: "books-zoo",
          title: 'ZOO',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2297697/";
            },},{id: "books-莲花",
          title: '莲花',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1529893/";
            },},{id: "books-被讨厌的勇气-自我启发之父-阿德勒的哲学课",
          title: '被讨厌的勇气 : “自我启发之父”阿德勒的哲学课',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26369699/";
            },},{id: "books-摆渡人",
          title: '摆渡人',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26356948/";
            },},{id: "books-唐诗三百首",
          title: '唐诗三百首',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1013267/";
            },},{id: "books-哭泣的骆驼",
          title: '哭泣的骆驼',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1029111/";
            },},{id: "books-格林童话全集",
          title: '格林童话全集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1043008/";
            },},{id: "books-人间词话",
          title: '人间词话',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1203426/";
            },},{id: "books-基地",
          title: '基地',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1258490/";
            },},{id: "books-彷徨",
          title: '彷徨',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1449348/";
            },},{id: "books-野草",
          title: '野草',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1915958/";
            },},{id: "books-九型人格",
          title: '九型人格',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1927902/";
            },},{id: "books-亲爱的安德烈",
          title: '亲爱的安德烈',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3369793/";
            },},{id: "books-心流-最优体验心理学",
          title: '心流 : 最优体验心理学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27186106/";
            },},{id: "books-父与子-全集",
          title: '《父与子》全集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1427538/";
            },},{id: "books-人间失格",
          title: '人间失格',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4259314/";
            },},{id: "books-基督山伯爵",
          title: '基督山伯爵',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1085860/";
            },},{id: "books-夜色玛奇莲v-毛豆邂逅-贝西-意大利餐厅-上",
          title: '夜色玛奇莲V : 毛豆邂逅“贝西”意大利餐厅（上）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10435410/";
            },},{id: "books-夜色玛奇莲-毛豆邂逅贝西意大利餐厅-vi-下-毛豆邂逅-贝西-意大利餐厅-下",
          title: '夜色玛奇莲-毛豆邂逅贝西意大利餐厅-VI-下 : 毛豆邂逅“贝西”意大利餐厅（下）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10487857/";
            },},{id: "books-青铜葵花",
          title: '青铜葵花',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1318622/";
            },},{id: "books-女生日记",
          title: '女生日记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1936204/";
            },},{id: "books-夜色玛奇莲vii-毛豆邂逅致命的旅伴",
          title: '夜色玛奇莲VII : 毛豆邂逅致命的旅伴',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20475300/";
            },},{id: "books-我是你的守护星3-命运游戏盘-金牌作家书系-我是你的守护星3-命运游戏盘",
          title: '我是你的守护星3：命运游戏盘 : 金牌作家书系•我是你的守护星3:命运游戏盘',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-22855346/";
            },},{id: "books-少年周小舟的月亮-金牌作家书系-青春飞扬系列小说-少年周小舟的月亮",
          title: '少年周小舟的月亮 : 金牌作家书系•青春飞扬系列小说:少年周小舟的月亮',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-23860417/";
            },},{id: "books-夜色玛奇莲viii-毛豆邂逅米拉尔奇莲",
          title: '夜色玛奇莲VIII : 毛豆邂逅米拉尔奇莲',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24697440/";
            },},{id: "books-夜色玛奇莲-毛豆邂逅白色恶魔",
          title: '夜色玛奇莲Ⅹ : 毛豆邂逅白色恶魔',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25817206/";
            },},{id: "books-如果星星开满树",
          title: '如果星星开满树',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25855809/";
            },},{id: "books-我是你的守护星-5奔弦之箭",
          title: '我是你的守护星 : 5奔弦之箭',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26852379/";
            },},{id: "books-我是你的守护星-儿童文学金牌作家书系",
          title: '我是你的守护星/儿童文学金牌作家书系',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26971591/";
            },},{id: "books-男生日记",
          title: '男生日记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3873839/";
            },},{id: "books-雪豹悲歌-动物小说大王沈石溪-品藏书系",
          title: '雪豹悲歌 : 动物小说大王沈石溪·品藏书系',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4061965/";
            },},{id: "books-狼王梦",
          title: '狼王梦',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4061972/";
            },},{id: "books-萝铃的魔力-第1部-巫术族的预言",
          title: '萝铃的魔力（第1部） : 巫术族的预言',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4100304/";
            },},{id: "books-夜色玛奇莲i-毛豆邂逅黑猫奶茶店",
          title: '夜色玛奇莲I : 毛豆邂逅黑猫奶茶店',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5406471/";
            },},{id: "books-夜色玛奇莲ii-毛豆邂逅银白色头发的少年",
          title: '夜色玛奇莲II : 毛豆邂逅银白色头发的少年',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5980002/";
            },},{id: "books-夜色玛奇莲iii-毛豆邂逅看不见的朋友",
          title: '夜色玛奇莲III : 毛豆邂逅看不见的朋友',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6013355/";
            },},{id: "books-夜色玛奇莲iv-毛豆邂逅-多莉-读书会",
          title: '夜色玛奇莲IV : 毛豆邂逅“多莉”读书会',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6087364/";
            },},{id: "books-长夜难明-紫金陈-推理之王-第3部",
          title: '长夜难明 : 紫金陈“推理之王”第3部',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26923390/";
            },},{id: "books-嫌疑人x的献身",
          title: '嫌疑人X的献身',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3211779/";
            },},{id: "books-阿加莎-克里斯蒂侦探推理-波洛-系列-全32册",
          title: '阿加莎·克里斯蒂侦探推理“波洛”系列（全32册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4038615/";
            },},{id: "books-放学后",
          title: '放学后',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4074636/";
            },},{id: "books-圣女的救济-嫌疑人x的献身-续集",
          title: '圣女的救济 : 《嫌疑人X的献身》续集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6784976/";
            },},{id: "books-becoming",
          title: 'Becoming',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30232128/";
            },},{id: "books-成为-米歇尔-奥巴马自传",
          title: '成为 : 米歇尔·奥巴马自传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30389372/";
            },},{id: "books-我们时代的神经症人格",
          title: '我们时代的神经症人格',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6511362/";
            },},{id: "books-茶花女",
          title: '茶花女',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1013380/";
            },},{id: "books-白夜行",
          title: '白夜行',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10554308/";
            },},{id: "books-梦里花落知多少",
          title: '梦里花落知多少',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-2070844/";
            },},{id: "books-怪诞行为学-可预测的非理性",
          title: '怪诞行为学 : 可预测的非理性',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27599381/";
            },},{id: "books-蛤蟆先生去看心理医生",
          title: '蛤蟆先生去看心理医生',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35143790/";
            },},{id: "books-海浪",
          title: '海浪',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10605850/";
            },},{id: "books-奥兰多-吴尔夫文集",
          title: '奥兰多 : 吴尔夫文集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1415226/";
            },},{id: "books-墙上的斑点-弗吉尼亚-伍尔夫小说",
          title: '墙上的斑点 : 弗吉尼亚·伍尔夫小说',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1427938/";
            },},{id: "books-到灯塔去",
          title: '到灯塔去',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3402999/";
            },},{id: "books-残狼灰满-动物小说大王沈石溪-品藏书系",
          title: '残狼灰满 : 动物小说大王沈石溪.品藏书系',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10439936/";
            },},{id: "books-虎娃金叶子-动物小说大王沈石溪-品藏书系",
          title: '虎娃金叶子 : 动物小说大王沈石溪·品藏书系',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-11633534/";
            },},{id: "books-山羊不吃天堂草",
          title: '山羊不吃天堂草',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1318615/";
            },},{id: "books-一千零一个愿望",
          title: '一千零一个愿望',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25925688/";
            },},{id: "books-神奇女生祝如愿-辫子姐姐心灵花园",
          title: '神奇女生祝如愿 : 辫子姐姐心灵花园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3099800/";
            },},{id: "books-我可以抱你吗-宝贝-辫子姐姐心灵花园",
          title: '我可以抱你吗，宝贝 : 辫子姐姐心灵花园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3099801/";
            },},{id: "books-斑羚飞渡",
          title: '斑羚飞渡',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3265347/";
            },},{id: "books-闪着泪光的决定-辫子姐姐心灵花园",
          title: '闪着泪光的决定 : 辫子姐姐心灵花园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3699101/";
            },},{id: "books-超酷天使大肚子爸-辫子姐姐心灵花园",
          title: '超酷天使大肚子爸 : 辫子姐姐心灵花园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3786733/";
            },},{id: "books-神奇的太阳花女孩",
          title: '神奇的太阳花女孩',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4842122/";
            },},{id: "books-秘密",
          title: '秘密',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27115970/";
            },},{id: "books-天才在左-疯子在右-国内第一本精神病人访谈手记",
          title: '天才在左 疯子在右 : 国内第一本精神病人访谈手记',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4242172/";
            },},{id: "books-你若安好便是晴天-林徽因传",
          title: '你若安好便是晴天 : 林徽因传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6784039/";
            },},{id: "books-三体-地球往事-三部曲之一",
          title: '三体 : “地球往事”三部曲之一',
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
            },},{id: "books-午夜降临前抵达-a-central-european-odyssey",
          title: '午夜降临前抵达 : A Central European Odyssey',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35522033/";
            },},{id: "books-陆犯焉识",
          title: '陆犯焉识',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25882276/";
            },},{id: "books-鱼猎",
          title: '鱼猎',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35923191/";
            },},{id: "books-大逃杀-全二册",
          title: '大逃杀 : （全二册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20473093/";
            },},{id: "books-络新妇之理-上",
          title: '络新妇之理（上）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4038672/";
            },},{id: "books-龙文身的女孩",
          title: '龙文身的女孩',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-4292149/";
            },},{id: "books-金色梦乡",
          title: '金色梦乡',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5038409/";
            },},{id: "books-三万英尺",
          title: '三万英尺',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30156483/";
            },},{id: "books-where-the-crawdads-sing",
          title: 'Where the Crawdads Sing',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30303684/";
            },},{id: "books-长安的荔枝",
          title: '长安的荔枝',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36104107/";
            },},{id: "books-达-芬奇密码",
          title: '达·芬奇密码',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1040771/";
            },},{id: "books-六個說謊的大學生",
          title: '六個說謊的大學生',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35817587/";
            },},{id: "books-巧克力天使-日本儿童文学大师系列",
          title: '巧克力天使 : 日本儿童文学大师系列',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-11620648/";
            },},{id: "books-小公主-外国文学经典",
          title: '小公主 : 外国文学经典',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1803641/";
            },},{id: "books-郑渊洁童话全集-33卷",
          title: '郑渊洁童话全集(33卷)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1873569/";
            },},{id: "books-舒克和贝塔历险记全集-第二卷-101-180集",
          title: '舒克和贝塔历险记全集 : 第二卷（101-180集）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1962205/";
            },},{id: "books-红蜡烛和美人鱼-小川未明经典童话集",
          title: '红蜡烛和美人鱼 : 小川未明经典童话集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6129470/";
            },},{id: "books-牛女-小川未明经典童话集",
          title: '牛女 : 小川未明经典童话集',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6314016/";
            },},{id: "books-同級生",
          title: '同級生',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-3095638/";
            },},{id: "books-陪你去流浪",
          title: '陪你去流浪',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10828422/";
            },},{id: "books-尖叫的海棠",
          title: '尖叫的海棠',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10828425/";
            },},{id: "books-儿童文学",
          title: '儿童文学',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1826905/";
            },},{id: "books-厨房帝国-儿童文学金牌作家书系-青春飞扬系列-厨房帝国",
          title: '厨房帝国 : 儿童文学金牌作家书系•青春飞扬系列:厨房帝国',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-24313312/";
            },},{id: "books-她从前是我深爱的人",
          title: '她从前是我深爱的人',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26136281/";
            },},{id: "books-我们那年的梦想",
          title: '我们那年的梦想',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26770868/";
            },},{id: "books-儿童文学金牌作家书系-双生火焰",
          title: '儿童文学金牌作家书系 : 双生火焰',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26776217/";
            },},{id: "books-给你我的所有",
          title: '给你我的所有',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26855615/";
            },},{id: "books-儿童文学-金牌作家书系-全世界请原谅我",
          title: '《儿童文学》金牌作家书系 : 全世界请原谅我',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26971581/";
            },},{id: "books-就这样陪着你-儿童文学-金牌作家书系-我的爱-系列小说",
          title: '就这样陪着你 : 《儿童文学》金牌作家书系·“我的爱”系列小说',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30846805/";
            },},{id: "books-杨梅",
          title: '杨梅',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5038469/";
            },},{id: "books-木棉-流年",
          title: '木棉·流年',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5333930/";
            },},{id: "books-完美的花朵",
          title: '完美的花朵',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-6245485/";
            },},{id: "books-罗杰疑案",
          title: '罗杰疑案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-21371175/";
            },},{id: "books-涂佛之宴-宴之支度-上",
          title: '涂佛之宴·宴之支度（上）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5395153/";
            },},{id: "books-涂佛之宴-宴之始末-上",
          title: '涂佛之宴·宴之始末（上）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5994808/";
            },},{id: "books-罗杰疑案",
          title: '罗杰疑案',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1807516/";
            },},{id: "books-生命-请签收-神秘的快递家族1",
          title: '生命，请签收 : 神秘的快递家族1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20504524/";
            },},{id: "books-青柠时代i",
          title: '青柠时代I',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-30558863/";
            },},{id: "books-不老泉-不老泉文库",
          title: '不老泉 : 不老泉文库',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-20561802/";
            },},{id: "books-熔炉-十周年纪念版",
          title: '熔炉 : 十周年纪念版',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-34970373/";
            },},{id: "books-撒哈拉的故事",
          title: '撒哈拉的故事',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26997048/";
            },},{id: "books-快把我哥带走",
          title: '快把我哥带走',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-26613709/";
            },},{id: "books-公主病的克星",
          title: '公主病的克星',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27201522/";
            },},{id: "books-感谢你是爱我的之偏执的浪漫",
          title: '感谢你是爱我的之偏执的浪漫①',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-34855459/";
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
            },},{id: "books-埃隆-马斯克传",
          title: '埃隆·马斯克传',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36518892/";
            },},{id: "books-klara-and-the-sun",
          title: 'Klara and the Sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35113983/";
            },},{id: "books-semantic-error-语义错误",
          title: 'Semantic Error : 语义错误',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35777009/";
            },},{id: "books-我与地坛",
          title: '我与地坛',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-5910656/";
            },},{id: "books-中国少年儿童百科全书-全四册",
          title: '中国少年儿童百科全书（全四册）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1028409/";
            },},{id: "books-房思琪的初恋乐园",
          title: '房思琪的初恋乐园',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-27614904/";
            },},{id: "books-the-love-hypothesis",
          title: 'The Love Hypothesis',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-35606579/";
            },},{id: "books-乡土中国",
          title: '乡土中国',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1795079/";
            },},{id: "books-太白金星有点烦",
          title: '太白金星有点烦',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36328704/";
            },},{id: "books-经济学原理-上下",
          title: '经济学原理（上下）',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1028842/";
            },},{id: "books-内在的天空-占星学入门",
          title: '内在的天空 : 占星学入门',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10546850/";
            },},{id: "books-月亮和六便士",
          title: '月亮和六便士',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1858513/";
            },},{id: "books-诗经",
          title: '诗经',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1883245/";
            },},{id: "books-草房子",
          title: '草房子',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-25953676/";
            },},{id: "books-占星术杀人魔法",
          title: '占星术杀人魔法',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-10740776/";
            },},{id: "books-方舟",
          title: '方舟',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-36832093/";
            },},{id: "books-笨狼的故事-中国幽默儿童文学创作丛书",
          title: '笨狼的故事 : 中国幽默儿童文学创作丛书',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/douban-1071463/";
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
