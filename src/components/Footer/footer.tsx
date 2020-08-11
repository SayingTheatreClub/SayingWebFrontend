import React from "react";

const playList = ["红白玫瑰", "驴得水", "你好疯子", "旧事", "暗恋桃花源"];
const aboutList = ["红白玫瑰", "驴得水", "你好疯子", "旧事", "暗恋桃花源"];
const mediaList = ["Wechat"];

const AboutUs: React.FC = (list) => (
  <ul>
    <li>戏言家庭</li>
    <li>加入我们</li>
    <li>支持戏言</li>
    <li>联系我们</li>
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

const Footer: React.FC = (props) => (
  <div className="footer">
    <div className="list-wrapper">
      <div>关于我们</div>
      <InfoList list={playList} className="footer-list" />
    </div>
    <div className="list-wrapper">
      <InfoList list={playList} className="footer-list" />
    </div>
    <div className="list-wrapper">
      <InfoList list={playList} className="footer-list" />
    </div>
    <div className="list-wrapper">
      <InfoList list={playList} className="footer-list" />
    </div>
  </div>
);

export default Footer;
