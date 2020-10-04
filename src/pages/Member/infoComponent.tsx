import React, { FC } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

interface InfoComponentProps {
  imgUrl: string;
  desc: string;
}

const InfoComponent: FC<InfoComponentProps> = (props) => {
  const { imgUrl, desc } = props;
  return (
    <div className="info-card-wrapper">
      <img
        style={{ height: "560px", width: "492px" }}
        src={imgUrl}
        alt="poster"
      />
      <Link to="/join">
        <Button danger className="info-button">
          加入我们
        </Button>
      </Link>
      <p className="member-info-desc" style={{ width: "492px", marginTop: "40px" }}>{desc}</p>
    </div>
  );
};

export default InfoComponent;
