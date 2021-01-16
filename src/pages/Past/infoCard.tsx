import React, { FC } from "react";
import Button from "../../components/Button";
import { generateLink } from "../../libs/funcs";

interface InfoCardProps {
  title: string;
  time: string;
  discription: string;
  day: string;
  clickFuncs:Array<()=>void>;
}

const InfoCard: FC<InfoCardProps> = (props) => {
  const { title, time, discription, day,clickFuncs } = props;
  return (
    <div className="past-info-card">
      <p className="past-info-title">{title}</p>
      {/* <div className="past-page-content-wrapper"> */}
        <div className="past-info-discription">{discription}</div>
        {/* <div className="play-info-left">
          <div className="play-info-day">{day}</div>
          <div className="play-info-time">{time}</div>
          <div className="play-info-place">{place}</div>
        </div> */}

        
          {["Program","直播预约"].map((item,index) =>
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
    // </div>
  );
};

export default InfoCard;
