import React, { FC, useState } from "react";
import PlayCard from "../Cards/playCard";
import InterviewCard from "../Cards/interviewCard";
import { Stream } from "stream";

type FanfactsType = "left" | "right";

interface FanfactsProps {
  type?: FanfactsType;
}
const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";

interface ArrowProps {
  isLeft?: boolean;
  className?: string;
  onClick?: () => void;
}
const ArrowSvg: FC<ArrowProps> = (props) => {
  const styles = {
    transform: props.isLeft ? "matrix(-1, 0, 0, 1, 0, 0)" : "none",
  };
  return (
    <div
      className={props.className}
      style={{ display: "inline-block" }}
      onClick={props.onClick}
    >
      <svg
        width="15"
        height="29"
        viewBox="0 0 15 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles}
      >
        <path
          d="M0.666171 0.762966C0.454998 1.00324 0.287461 1.28865 0.17315 1.60284C0.0588397 1.91704 0 2.25385 0 2.59401C0 2.93416 0.0588397 3.27097 0.17315 3.58517C0.287461 3.89936 0.454998 4.18477 0.666171 4.42505L9.50459 14.5023L0.666171 24.5795C0.240247 25.0651 0.000964553 25.7237 0.000964553 26.4105C0.000964553 27.0973 0.240247 27.7559 0.666171 28.2416C1.0921 28.7272 1.66977 29 2.27212 29C2.87447 29 3.45215 28.7272 3.87807 28.2416L14.3338 16.3203C14.545 16.08 14.7125 15.7946 14.8269 15.4804C14.9412 15.1662 15 14.8294 15 14.4893C15 14.1491 14.9412 13.8123 14.8269 13.4981C14.7125 13.1839 14.545 12.8985 14.3338 12.6582L3.87807 0.736993C3.01245 -0.249951 1.55457 -0.249951 0.666171 0.762966Z"
          fill="#D46201"
        />
      </svg>
    </div>
  );
};
const Fanfacts: FC<FanfactsProps> = (props) => {
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
                imgUrl={url}
                moveSpace={space}
              />
            ))}
          </div>
        </div>
      </div>
    );
  return (
    <div className="carousel-wrapper">
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
                imgUrl={url}
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

export default Fanfacts;
