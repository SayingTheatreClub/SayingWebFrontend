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
} from "../../libs/footer";
import { Popover } from "antd";
import { photoUrl } from "../../libs/security";

//added for rederict to external links
import { generateExternalLink } from "../../libs/funcs";

interface InfoListProps {
  list: Array<ListItem>;
  className: string;
  isMedia: boolean;
}
interface FooterProps {
  withMailbox?: boolean;
}
const content = (
  <img
    src={`${photoUrl + "wechat.jpg"}`}
    alt="wechat"
    className="footer-wechat-img"
  />
);

const InfoList: React.FC<InfoListProps> = (props) => {
  const { list, className, isMedia } = props;
  // if it is the list of media
  if (isMedia)
    return (
      <div className={className}>
        <div>
          <Popover content={content}>
            <div>
              {/* icon list */}
              <img src={mediaIconList[0]} alt="logo" className="footer-icon" />
              {mediaList[0].name}
            </div>
          </Popover>
        </div>
        {/* media links */}
        {mediaList.slice(1, mediaIconList.length).map((item, index) => (
          <div>
            <a
              href={item.url}
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={mediaIconList[index + 1]}
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
      {list.map((item: ListItem) =>
        {generateExternalLink(
          <Link to={item.url} className="footer-link">
            <div
              style={{
                cursor: item.url.length === 0 ? "not-allowed" : "pointer",
              }}
            >
              {item.name}
            </div>
          </Link>,
          item.url.includes("http") ? true : false
      )}
      )}
    </div>
  );
};

const Footer: React.FC<FooterProps> = (props) => (
  <div className="footer-wrapper">
    <div className="footer">
      {[aboutList, playList, eventList, []].map(
        (item: ListItem[], index: number) => (
          <div
            className={`list-wrapper ${
              !props.withMailbox ? "list-non-mail" : ""
            }`}
          >
            {generateExternalLink(
                <Link to={titleList[index].url} className="footer-link">
                <div className="footer-list-title"
                  style={{
                  cursor: titleList[index].url.length === 0 ? "not-allowed" : "pointer",
                }}
                >{titleList[index].name}
                
                </div>
                </Link>,
                titleList[index].external
            )}
            {/* Removed */}
            {/* <Link to={titleList[index].url} className="footer-link">
              <div className="footer-list-title"
                style={{
                cursor: titleList[index].url.length === 0 ? "not-allowed" : "pointer",
              }}
              >{titleList[index].name}
              
              </div>

            </Link> */}
            <InfoList
              isMedia={index === 3}
              list={item}
              className="footer-list-member"
            />
          </div>
        )
      )}
    </div>
    <div className="footer-signature">© 2021 戏言剧社 版权所有</div>
  </div>
);

export default Footer;
