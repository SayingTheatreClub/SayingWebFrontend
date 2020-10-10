import { Carousel } from "antd";

import React, { FC } from "react";
import { photoUrl } from "../../libs/security";

interface HeaderCarouselProps {
  imgList?: Array<string>;
}
const HeaderCarousel: FC<HeaderCarouselProps> = (props) => {
  return (
    <Carousel autoplay effect="fade">
      {[1, 2, 3, 4, 5, 6].map((item: number) => (
        <img
          src={`${photoUrl}slide${item}.jpg`}
          alt="slide"
          className="home-slide-img"
        />
      ))}
    </Carousel>
  );
};

export default HeaderCarousel;
