import React from "react";
import icon from '../../assets/Icon.png';

const titleList = [" 关于我们"," 演出剧目"," 加入我们"," 关注我们"];

const playList = ["红白玫瑰", "驴得水", "你好疯子", "旧事", "暗恋桃花源"];
const aboutList = ["戏言家庭", "加入我们", "支持戏言", "联系我们"];
const mediaList = ["微信公众号","Youtube","Bilibili","微博"];
const eventList = ["读本会","演员的诞生"];

const AboutUs: React.FC = (list) => (
  <ul>
    <li>关于我们</li>
    <li>演出</li>
    <li>加入我们</li>
    <li>关注我们</li>
  </ul>
);
interface InfoListProps {
  list: Array<string>;
  className: string;
}
const InfoList: React.FC<InfoListProps> = (props) => (
  <ul className={props.className}>
    {props.list.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

interface mediaListProps {
  list: Array<string>;
  className: string;
}
const MediaList: React.FC<InfoListProps> = (props) => (
  <ul className={props.className}>
    {props.list.map((item) => (
      <li><img src={icon} style={{width:"16px", height: "16px"}}/>&nbsp;&nbsp;&nbsp;{item}</li>
    ))}
  </ul>
);

const Footer: React.FC = (props) => (
  <div className="footer">
    <div className="list-wrapper">
      <div className = "footer-list-title">{titleList[0]}</div>
      <br/>
      <InfoList list={aboutList} className="footer-list-member" />
    </div>
    <div className="list-wrapper">
      <div className = "footer-list-title">{titleList[1]}</div>
      <br/>
      <InfoList list={playList} className="footer-list-member" />
    </div>
    <div className="list-wrapper">
      <div className = "footer-list-title">{titleList[2]}</div>
      <br/>
      <InfoList list={eventList} className="footer-list-member" />
    </div>
    <div className="list-wrapper">
      <div className = "footer-list-title">{titleList[3]}</div>
      <br/>
      <MediaList list={mediaList} className="footer-list-member" />
    </div>
  </div>
);

export default Footer;
