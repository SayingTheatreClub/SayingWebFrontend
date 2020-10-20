import React, { FC, useState } from "react";
import ArrowSvg from "../Arrow";
import RedMark from "../../assets/redMark.svg";
import { playText } from "../../text/carouselText";
import { photoUrl } from "../../libs/security";
import PlayCard from "../Cards/playCard";

interface RightCarouselProps {
  content: { name: string; year: string }[];
}

const playStep = 259;

const RightCarousel: FC<RightCarouselProps> = (props) => {
  const { content } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean, isInterview: boolean) => {
    //让他回去
    if (space / playStep + 1 > playText.length) {
      setSpace(0);
      return;
    }

    if (isLeft) {
      setSpace(space + playStep);
    } else {
      if (space <= 0) return;
      setSpace(space - playStep);
    }
  };
  return (
    <div className="carousel-wrapper">
      <div className="carousel-content-wrapper carousel-content-wrapper-right">
        <div className="carousel-content-top">
          <div className="carousel-content-text">
            <img
              src={RedMark}
              alt="mark"
              style={{ height: "6px", width: "13px", marginRight: "6px" }}
            />
            过往大戏
          </div>
          <div className="carousel-controller">
            <ArrowSvg
              isLeft={true}
              className="carousel-arrow carousel-arrow-left"
              onClick={() => {
                handleClick(false, false);
              }}
            />
            <ArrowSvg
              isLeft={false}
              className="carousel-arrow carousel-arrow-right"
              onClick={() => {
                handleClick(true, false);
              }}
            />
          </div>
        </div>
        <div className="carousel-content carousel-content-right">
          <div className="carousel-content-shader" />
          {content.map((item) => (
            <PlayCard
              key={item.name}
              className="carousel-card"
              name={`${item.name}`}
              year={item.year}
              type="img-text"
              imgUrl={`${photoUrl}${item.name}.jpg`}
              moveSpace={space}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightCarousel;
