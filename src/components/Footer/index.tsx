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

interface InfoListProps {
  list: Array<ListItem>;
  className: string;
  isMedia: boolean;
}

const InfoList: React.FC<InfoListProps> = (props) => {
  const { list, className, isMedia } = props;
  // if it is the list of media
  if (isMedia)
    return (
      <div className={className}>
        {[0, 1, 2, 3].map((item: number) => (
          <div>
            <Link to="" className="footer-link">
              <img
                src={mediaIconList[item]}
                alt="logo"
                className="footer-icon"
              />
              {mediaList[item]}
            </Link>
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
  <div className="footer-wrapper" >
    <div className="footer">
      {[aboutList, playList, eventList, []].map(
        (item: ListItem[], index: number) => (
          <div className="list-wrapper">
            <div className="footer-list-title">{titleList[index]}</div>
            <InfoList
              isMedia={index === 3}
              list={item}
              className="footer-list-member"
            />
          </div>
        )
      )}
    </div>
    <div className="footer-signature" >© 2020 戏言剧社 版权所有</div>
  </div>
);

export default Footer;
