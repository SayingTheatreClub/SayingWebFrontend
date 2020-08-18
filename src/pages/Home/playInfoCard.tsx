import React, { FC } from "react";
import { Button } from "antd";
interface PlayInfoCardProps {
  imgUrl: string;
  title: string;
  desc: string;
  belonging: string;
}

const PlayInfoCard: FC<PlayInfoCardProps> = (props) => {
  const { imgUrl, title, desc, belonging } = props;
  return (
    <div className="home-play-info-card-wrapper">
      <img src={imgUrl} alt="" className="home-play-info-card-left" />
      <div className="home-play-info-card-right">
        <div className="home-play-info-card-belonging">{belonging}</div>
        <p className="home-play-info-card-title">{title}</p>
        <p className="home-play-info-card-desc">{desc}</p>
        <Button danger className="home-button-right home-play-info-button">了解详情</Button>
      </div>
    </div>
  );
};


export default PlayInfoCard;