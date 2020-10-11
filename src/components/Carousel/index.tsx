import React, { FC, useState } from "react";
import PlayCard from "../Cards/playCard";
import InterviewCard from "../Cards/interviewCard";
import ArrowSvg from "../Arrow";
import Mary from "../../assets/mary.jpg";
import RedMark from "../../assets/redMark.svg";
import { playText } from "../../text/carouselText";
import { photoUrl } from "../../libs/security";

type carouselType = "left" | "right";

interface CarouselProps {
  type?: carouselType;
}

const interviewStep = 251;
const playStep = 259;

const Carousel: FC<CarouselProps> = (props) => {
  const { type } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean, isInterview: boolean) => {
    //if it is interview card
    if (isInterview) {
      if (isLeft) {
        setSpace(space + interviewStep);
      } else {
        if (space <= 0) return;
        setSpace(space - interviewStep);
      }
      return;
    }

    if (isLeft) {
      setSpace(space + playStep);
    } else {
      if (space <= 0) return;
      setSpace(space - playStep);
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
            {playText.map((item) => (
              // <Link to={item.name.includes("玫瑰") ? `/play/${item.name}` : ""}>
              <PlayCard
                key={item.name}
                className="carousel-card"
                name={`${item.name}`}
                year={item.year}
                type="img-text"
                imgUrl={`${photoUrl}${item.name}.jpg`}
                moveSpace={space}
              />
              // </Link>
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
