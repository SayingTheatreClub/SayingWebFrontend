import React, { FC } from "react";
import { Button } from "antd";

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
      <Button danger className="info-button">
        加入我们
      </Button>
      <p style={{ width: "492px", marginTop: "40px" }}>{desc}</p>
    </div>
  );
};

export default InfoComponent;
