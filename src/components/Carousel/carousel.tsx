import React, { FC, useState } from "react";
import PlayCard from "../Cards/playCard";
import InterviewCard from "../Cards/interviewCard";
import ArrowSvg from '../Arrow/arrow';
import Mary from '../../assets/mary.jpg';
import Donkey from '../../assets/donkey.png';


type carouselType = "left" | "right";

interface CarouselProps {
  type?: carouselType;
}
const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";

const Carousel: FC<CarouselProps> = (props) => {
  const { type } = props;
  const [space, setSpace] = useState(0);
  const handleClick = (isLeft: boolean) => {
    if (isLeft) {
      setSpace(space + 257);
    } else {
      if (space <= 0) return;
      setSpace(space - 257);
    }
  };
  if (type === "right")
    return (
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper carousel-content-wrapper-right">
          <div className="carousel-content-top">
            <div className="carousel-content-text">过往大戏</div>
            <div className="carousel-controller">
              <ArrowSvg
                isLeft={true}
                className="carousel-arrow carousel-arrow-left"
                onClick={() => {
                  handleClick(true);
                }}
              />
              <ArrowSvg
                isLeft={false}
                className="carousel-arrow carousel-arrow-right"
                onClick={() => {
                  handleClick(false);
                }}
              />
            </div>
          </div>
          <div className="carousel-content carousel-content-right">
            <div className="carousel-content-shader" />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
          <div className="carousel-content-text">过往大戏</div>
          <div className="carousel-controller">
            <ArrowSvg
              isLeft={true}
              className="carousel-arrow carousel-arrow-left"
              onClick={() => {
                handleClick(true);
              }}
            />
            <ArrowSvg
              isLeft={false}
              className="carousel-arrow carousel-arrow-right"
              onClick={() => {
                handleClick(false);
              }}
            />
          </div>
        </div>
        <div className="carousel-content carousel-content-left">
          <div className="carousel-content-shader carousel-content-shader-left " />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
