import React from "react";
import icon01 from "../../assets/Icon.png";
import icon02 from "../../assets/Icon02.png";
import icon03 from "../../assets/Icon03.png";

const titleList = [" 关于我们", " 演出", " 活动动态", " 关注我们"];
const playList = ["红白玫瑰", "驴得水", "你好疯子", "旧事", "暗恋桃花源"];
const aboutList = ["戏言家庭", "加入我们", "支持戏言", "联系我们"];
const mediaList = ["微信公众号", "Youtube", "Bilibili", "微博"];
const mediaIconList = [icon02, icon01, icon01, icon03];
const eventList = ["读本会", "演员的诞生"];

interface InfoListProps {
  list: Array<string>;
  className: string;
  isMedia: boolean;
}

const InfoList: React.FC<InfoListProps> = (props) => {
  const { list, className, isMedia } = props;

  if (isMedia)
    return (
      <div className={className}>
          <div>
            <img src={mediaIconList[0]} className="footer-icon" />
            {mediaList[0]}
          </div>
          <div>
            <img src={mediaIconList[1]} className="footer-icon" />
            {mediaList[1]}
          </div>
          <div>
            <img src={mediaIconList[2]} className="footer-icon" />
            {mediaList[2]}
          </div>
          <div>
            <img src={mediaIconList[3]} className="footer-icon" />
            {mediaList[3]}
          </div>     
      </div>
    );

  return (
    <div className={className}>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

const Footer: React.FC = (props) => (
  <div className="footer">
    {[aboutList, playList, eventList, mediaList].map(
      (item:Array<string>, index: number) => (
        <div className="list-wrapper">
          <div className="footer-list-title">{titleList[index]}</div>
          <InfoList
            isMedia={index == 3}
            list={item}
            className="footer-list-member"
          />
        </div>
      )
    )}
  </div>
);

export default Footer;
