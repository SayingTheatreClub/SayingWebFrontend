import { Carousel } from "antd";

import React, { FC } from "react";
import { photoUrl } from "../../security";

interface HeaderCarouselProps {
  imgList?: Array<string>;
}
const HeaderCarousel: FC<HeaderCarouselProps> = (props) => {
  return (
    <Carousel autoplay effect="fade">
        {[1, 2, 3, 4, 5].map((item: number) => (
          <img
            src={`${photoUrl}slide${item}.jpg`}
            alt=""
            style={{
              width: "100%",
              height: "657px",
              position: "relative",
              justifyContent: "center",
              flexFlow: "row",
              alignContent: "center",
              textAlign: "center",
            }}
          />
        ))}
    </Carousel>
  );
};

export default HeaderCarousel;
