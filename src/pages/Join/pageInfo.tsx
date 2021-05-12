import React, { FC } from "react";
import Button from "../../components/Button";
import { photoUrl } from "../../libs/security";

//added for "报名链接" link
import { generateLink } from "../../libs/funcs";

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
        <div className="join-page-info-left">
          <div className="join-page-info-title">{title}</div>
          <div className="join-page-text-content">
            {text.split("/n").map((item: string) => (
              <p className="join-page-info-text">{item}</p>
            ))}
          </div>
          {/* <Button type="disabled" className="join-page-info-button">
            报名链接
          </Button> */}
          {/* Line 30 to 36 added */}
          {generateLink(
              <Button type="primary" className="join-page-info-button">
                报名链接
              </Button>,
              "https://forms.gle/PPrLtEWW7tET3kuX9",
              true
          )}
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
