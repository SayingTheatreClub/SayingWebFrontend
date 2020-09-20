import React from "react";
import icon from "../../assets/Icon.png";

const titleList = [" 关于我们", " 演出", " 活动动态", " 关注我们"];
const playList = ["红白玫瑰", "驴得水", "你好疯子", "旧事", "暗恋桃花源"];
const aboutList = ["戏言家庭", "加入我们", "支持戏言", "联系我们"];
const mediaList = ["微信公众号", "Youtube", "Bilibili", "微博"];
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
        {list.map((item) => (
          <div>
            <img src={icon} className="footer-icon" />
            {item}
          </div>
        ))}
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
