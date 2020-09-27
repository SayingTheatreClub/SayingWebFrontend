import React, { FC, useState } from "react";
import PlayCard from "../Cards/playCard";
import InterviewCard from "../Cards/interviewCard";
import ArrowSvg from "../Arrow";
import Mary from "../../assets/mary.jpg";
import Donkey from "../../assets/donkey.png";
import RedMark from "../../assets/redMark.svg";

type carouselType = "left" | "right";

interface CarouselProps {
  type?: carouselType;
}
const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";

const Carousel: FC<CarouselProps> = (props) => {
  const { type } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean, isInterview: boolean) => {
    //if it is interview card
    if (isInterview) {
      if (isLeft) {
        setSpace(space + 251);
      } else {
        if (space <= 0) return;
        setSpace(space - 251);
      }
      return;
    }

    if (isLeft) {
      setSpace(space + 259);
    } else {
      if (space <= 0) return;
      setSpace(space - 259);
    }
  };
  if (type === "right")
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <PlayCard
                className="carousel-card"
                name="[驴得水]"
                year="2019"
                type="img-text"
                imgUrl={Donkey}
                moveSpace={space}
              />
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div className="carousel-wrapper carousel-wrapper-left">
      <div className="carousel-content-wrapper carousel-content-wrapper-left">
        <div className="carousel-content-top-left">
          <div className="carousel-content-text">
            <img
              src={RedMark}
              alt="mark"
              style={{ height: "6px", width: "13px", marginRight: "6px" }}
            />
            关于戏言
          </div>
          <div className="carousel-controller">
            <ArrowSvg
              isLeft={true}
              className="carousel-arrow carousel-arrow-left"
              onClick={() => {
                handleClick(false, true);
              }}
            />
            <ArrowSvg
              isLeft={false}
              className="carousel-arrow carousel-arrow-right"
              onClick={() => {
                handleClick(true, true);
              }}
            />
          </div>
        </div>
        <div className="carousel-content carousel-content-left">
          <div className="carousel-content-shader carousel-content-shader-left " />
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <div className="home-carousel-interview-card">
              <InterviewCard
                imgUrl={Mary}
                title="玛丽：戏剧就是造梦"
                collection="戏言人专访"
                moveSpace={space}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
