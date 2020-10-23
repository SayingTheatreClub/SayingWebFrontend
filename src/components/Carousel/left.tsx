import React, { FC, useState } from "react";
import ArrowSvg from "../Arrow";
import RedMark from "../../assets/redMark.svg";
import InterviewCard from "../Cards/interviewCard";

interface LeftCarouselProps {
  content: any[];
}

const interviewStep = 251;

const LeftCarousel: FC<LeftCarouselProps> = (props) => {
  const { content } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean, isInterview: boolean) => {
    //if it is interview card\
    if (isInterview) {
      if (isLeft) {
        setSpace(space + interviewStep);
      } else {
        if (space <= 0) return;
        setSpace(space - interviewStep);
      }
      return;
    }
  };
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
          {content.map((item) => {
            if (item.img.length > 0)
              return (
                <div className="home-carousel-interview-card">
                  <InterviewCard
                    imgUrl={`${item.img}`}
                    title="玛丽：戏剧就是造梦"
                    collection="戏言人专访"
                    moveSpace={space}
                  />
                </div>
              );
            return <div></div>
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftCarousel;
