import React, { FC } from "react";
import Button from "../../components/Button";
import { generateLink } from "../../libs/funcs";

interface InfoCardProps {
  title: string;
  time: string;
  place: string;
  day: string;
  clickFuncs:Array<()=>void>;
}

const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, time, place, day,clickFuncs } = props;
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
          {["招新", "直播预约", "Program"].map((item,index) =>
            generateLink(
              <Button
                type={
                  item === "招新"
                    ? "disabled"
                    : item === "Program"
                    ? "default"
                    : "primary"
                }
                className="play-page-button"
                onClick={clickFuncs[index]}
              >
                {item}
              </Button>,
              item === "直播预约" ? "https://www.wjx.cn/jq/92930884.aspx" : "",
              true
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
