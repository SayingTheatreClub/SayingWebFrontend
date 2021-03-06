import Wechat from "../assets/wechat.png";
import Bilibili from "../assets/bilibili.png";
import Youtube from "../assets/youtube.png";
import Weibo from "../assets/weibo.png";

//"external" property added for units redirect to external links

export interface ListItem {
  name: string;
  url: string;
}

export const titleList = [
  { name: " 关于我们", url: "/about", external: false },
  { name: " 话剧演出", url: "https://sayingtheatre.webflow.io/show", external: true},
  { name: " 活动动态", url: "", external: false },
  { name: " 关注我们", url: "", external: false },
];
export const playList: ListItem[] = [
  { name: "恋爱的犀牛", url: "https://sayingtheatre.webflow.io/show/rhinoceros-in-love" },
  { name: "红玫瑰与白玫瑰", url: "https://sayingtheatre.webflow.io/show/red-rose-white-rose" },
  { name: "驴得水", url: "https://sayingtheatre.webflow.io/show/mr-donkey" },
  { name: "你好，疯子", url: "https://sayingtheatre.webflow.io/show/the-insanity" },
  { name: "旧事", url: "https://sayingtheatre.webflow.io/show/the-old-story" },
  { name: "暗恋桃花源", url: "https://sayingtheatre.webflow.io/show/secret-love-in-peach-blossom-land" },
];
export const aboutList: ListItem[] = [
  { name: "戏言家庭", url: "/member" },
  { name: "加入我们", url: "/join" },
  { name: "支持戏言", url: "" },
  { name: "联系我们", url: "https://sayingtheatre.webflow.io/contact-us" },
];

export const mediaList = [
  { name: "微信公众号", url: "" },
  {
    name: "Youtube",
    url:
      "https://www.youtube.com/channel/UCIR0psBBMT85b-NUiKhFjGA",
  },
  { name: "Bilibili", url: "https://space.bilibili.com/62206666" },
  { name: "微博", url: "https://weibo.com/sayingtheatre" },
];

export const mediaIconList = [Wechat, Youtube, Bilibili, Weibo];
export const eventList = [
  { name: "读本会", url: "" },
  { name: "演员的诞生", url: "" },
];
