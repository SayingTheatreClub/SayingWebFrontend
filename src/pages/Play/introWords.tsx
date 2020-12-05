import React, { FC } from "react";
import RedMark from "../../assets/redMark.svg";
import { PlayText } from "../../text/playText";

interface IntroWordsProps {
  passage: PlayText;
  isBlack?: boolean;
}

export const IntroWords: FC<IntroWordsProps> = (props) => {
  const { passage, isBlack } = props;
  return (
    <div className="play-text-box">
      <p className="play-text-title" style={{ color: isBlack ? "white" : "" }}>
        <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
        导言
      </p>
      <div
        className="play-text-box-lower"
        style={{ color: isBlack ? "white" : "black" }}
      >
        <div className="play-text-box-left">
          {passage.p1.split("/n").map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="play-text-box-right">
          {passage.p2.split("/n").map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
