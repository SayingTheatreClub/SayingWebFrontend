import React, { FC } from "react";
import { Carousel as AntdCarousel } from "antd";
interface CarouselProps {}
const url = "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";
const Carousel: FC = (props) => {
  return (
    <>
      <AntdCarousel className="carousel" effect="fade">
        <img src={url} alt="" className="carousel-image"/>
        <img src={url} alt=""/>
        <img src={url} alt=""/>
        <img src={url} alt=""/>
        <img src={url} alt=""/>
      </AntdCarousel>
    </>
  );
};

export default Carousel;