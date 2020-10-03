import React from "react";
import { Link } from "react-router-dom";
import {
  titleList,
  playList,
  aboutList,
  mediaList,
  mediaIconList,
  eventList,
  ListItem,
} from "../../libs/lists";
import { Popover } from "antd";
import IMG from "../../assets/donkey.png";
interface InfoListProps {
  list: Array<ListItem>;
  className: string;
  isMedia: boolean;
}

const content = <img src={IMG} alt="wechat" className="footer-wechat-img" />;

const InfoList: React.FC<InfoListProps> = (props) => {
  const { list, className, isMedia } = props;
  // if it is the list of media
  if (isMedia)
    return (
      <div className={className}>
        <div>
          <Popover content={content}>
            <div>
              <img src={mediaIconList[0]} alt="logo" className="footer-icon" />
              {mediaList[0].name}
            </div>
          </Popover>
        </div>
        {mediaList.slice(1, mediaIconList.length).map((item, index) => (
          <div>
            <a
              href={item.url}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mediaIconList[index]}
                alt="logo"
                className="footer-icon"
              />
              {item.name}
            </a>
          </div>
        ))}
      </div>
    );

  return (
    <div className={className}>
      {list.map((item: ListItem) => (
        <Link to={item.url} className="footer-link">
          <div>{item.name}</div>
        </Link>
      ))}
    </div>
  );
};

const Footer: React.FC = (props) => (
  <div className="footer-wrapper">
    <div className="footer">
      {[aboutList, playList, eventList, []].map(
        (item: ListItem[], index: number) => (
          <div className="list-wrapper">
            <Link to={titleList[index].url} className="footer-link">
              <div className="footer-list-title">{titleList[index].name}</div>
            </Link>
            <InfoList
              isMedia={index === 3}
              list={item}
              className="footer-list-member"
            />
          </div>
        )
      )}
    </div>
    <div className="footer-signature">© 2020 戏言剧社 版权所有</div>
  </div>
);

export default Footer;
