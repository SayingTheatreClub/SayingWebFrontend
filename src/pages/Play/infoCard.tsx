import React, { FC } from "react";
import { Button } from "antd";
interface InfoCardProps {
  title: string;
  time: string;
  place: string;
  day: string;
}

const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, time, place, day } = props;
  return (
    <div className="play-info-card">
      <p className="play-info-title">{title}</p>
      <div className="play-page-content-wrapper">
        <div className="play-info-left">
          <div className="play-info-day">{day}</div>
          <div className="play-info-time">{time}</div>
          <div className="play-info-place">{place}</div>
        </div>

        <div className="play-info-right">
          <Button className="play-page-button play-page-button-1">招新</Button>
          <Button className="play-page-button play-page-button-2">RSVP-我想看</Button>
          <Button className="play-page-button play-page-button-3">Program</Button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
