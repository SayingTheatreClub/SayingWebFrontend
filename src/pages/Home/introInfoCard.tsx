import React, { FC } from "react";
import { homeHead } from "../../text/hometext";
const IntroInfoCard: FC = (props) => (
  <div className="introcard">
    <div className="introcard-content">
      <div>
        <h2 className="home-intro-title">{homeHead.title}</h2>
        <div>
          {homeHead.text.split("。").map((item: string) => (
            <p className="home-intro-desc">{item + "。"}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default IntroInfoCard;
