import React, { FC, useState } from "react";
import { ArrowPair } from "../Arrow";
import RedMark from "../../assets/redMark.svg";
import InterviewCard from "../Cards/interviewCard";
import { generateLink } from "../../libs/funcs";

interface LeftCarouselProps {
  content: any[];
}

const interviewStep = 251;

const LeftCarousel: FC<LeftCarouselProps> = (props) => {
  const { content } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean) => {
    if (space / interviewStep + 4 > content.length) {
      setSpace(0);
      return;
    }
    if (isLeft) {
      if (space <= 0) return;
      setSpace(space - interviewStep);
    } else {
      setSpace(space + interviewStep);
    }
    console.log(space);
    return;
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
            {/* <ArrowSvg
              isLeft={true}
              className="carousel-arrow carousel-arrow-left"
              onClick={() => {
                handleClick(false);
              }}
            />
            <ArrowSvg
              isLeft={false}
              className="carousel-arrow carousel-arrow-right"
              onClick={() => {
                handleClick(true);
              }}
            /> */}
            <ArrowPair
              styles={[
                "carousel-arrow carousel-arrow-left",
                "carousel-arrow carousel-arrow-right",
              ]}
              clickFuncs={[
                () => {
                  handleClick(false);
                },
                () => {
                  handleClick(true);
                },
              ]}
            />
          </div>
        </div>
        <div className="carousel-content carousel-content-left">
          <div className="carousel-content-shader carousel-content-shader-left " />
          {content.map((item) => {
            if (item.img.length > 0)
              return (
                <div className="home-carousel-interview-card">
                  {generateLink(
                    <InterviewCard
                      imgUrl={`${item.img}`}
                      title={item.title.slice(3)}
                      collection="戏言人专访"
                      moveSpace={space}
                    />,
                    item.link,
                    true
                  )}
                </div>
              );
            return <div></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftCarousel;
