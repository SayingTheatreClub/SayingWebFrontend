import React, { FC } from "react";
import { Button } from "antd";
import { photoUrl } from "../../libs/security";

interface PageInfoProps {
  title: string;
  text: string;
  img: string;
}

const PageInfo: FC<PageInfoProps> = (props) => {
  const { title, text, img } = props;
  return (
    <div className="join-page-info-wrapper">
      <div className="join-page-info-content">
        <div>
          <div className="join-page-info-title">{title}</div>
          <div className="join-page-text-content" >
          {text.split("/n").map((item: string) => (
            <p className="join-page-info-text">{item}</p>
          ))}
          </div>
          <Button danger type="primary" disabled className="join-page-info-button" >报名链接</Button>
        </div>
        <img
          src={photoUrl + img}
          alt="page info"
          className="join-page-info-img"
        />
      </div>
    </div>
  );
};

export default PageInfo;
