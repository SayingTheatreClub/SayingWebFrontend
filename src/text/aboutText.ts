import { photoUrl } from "../libs/security";

export const intro = {
  title: "关于戏言",
  text: `戏言剧社创建于2015年，是威斯康星大学麦迪逊分校唯一华人话剧社团，
  致力于为麦屯学生带来近代现代话剧表演，传播话剧艺术的乐趣，
  并且定期带来免费的话剧相关活动。`,
};

export const fifthAnni = {
  title: "五周年纪录片",
  text: `五年，1825天，43800小时，157680000秒，是举办一届奥运会，
  是换一个新的手机，是一只刺猬短暂的一生，
  是一个婴儿从离开母亲子宫到牙牙学语。时间给予世界如此之多的可能性，
  使得我们得以度过四个春天，迎来了戏言的第五年。`,
};
//Bilibili 记得在url后面加上  &high_quality=1
//否则不能高清
export const tabs = [
  {
    title: "01 《你好，疯子》纪录片",
    text: `戏言剧社2017年排演剧目《你好，疯子》。/n
  为了让这七个疯子站在舞台上，我们做了很多。`,
    img: "",
    video: "https://www.youtube.com/embed/aB9Gms746-M",
    link:""
  },
  {
    title: "02 戏言人专访: 玛丽",
    text: `在戏言两年多的时间里，玛丽有很多的头衔：一线的音效师，全局的制作人，隐退的advisor。如果抛开这些标签，她也只是个喜欢尝试新餐厅，追剧磕cp，每个月都想去剧场看剧的学生。`,
    img: `${photoUrl}Mary.jpg`,
    video: "",
    link:
      "https://sayingtheatre.webflow.io/article-collection/mary",
  },
  {
    title: "03 戏言人专访：梁国龙",
    text: `在梁国龙身上贴了第N个标签，发现这位戏言大佬无法按类归档， 他神奇的将所有疏离又矛盾的特点毫不违和的融合在一起。他举止温和、绅士，但笑声很魔性；他谈吐冷静、睿智，但灵魂会出窍；他天马行空、特立独行，但你偏偏觉得，这个人很稳很靠谱。`,
    img: `${photoUrl}梁国龙-interview.jpg`,
    video: "",
    link:"https://sayingtheatre.webflow.io/article-collection/guolong"
  },
  {
    title: "04 戏言人专访：Linda",
    text: `坐在Valentia咖啡厅窗前的位子上，等着一位戏言人，她是《你好，疯子！》的制作人Linda。在咖啡馆里的热气中，Linda走了进来，点了一杯Ice Black Tea，温柔地与我们打招呼。一瞬间感觉咖啡厅又安静了一些，坐在对面的她，有着让人心神向往的大气。`,
    img: `${photoUrl}Linda-interview.jpg`,
    video: "",
    link:"https://sayingtheatre.webflow.io/article-collection/linda"
  },
  {
    title: "05 戏言人专访：古雨禾",
    text: `这一次，我们从灯光音效谈起，从舞台美术的细节谈起，带给你《暗恋桃花源》、《旧事》、《你好，疯子》的舞台背后支撑者的故事，和她浓墨重彩的热爱。`,
    img: `${photoUrl}古雨禾-interview.jpg`,
    video: "",
    link:"https://sayingtheatre.webflow.io/article-collection/laoban"
  },
  {
    title: "06 戏言人专访：黄子尧",
    text: `面试戏言剧社之前，黄子尧一心向往的其实是导演一职。阴差阳错，她面试上的，却是戏言当时即将推出的新作《旧事》的演员。最后，她成为了《你好，疯子》的导演。`,
    img: `${photoUrl}黄子尧-interview.jpg`,
    video: "",
    link:"https://sayingtheatre.webflow.io/article-collection/ziyao"
  },
];
