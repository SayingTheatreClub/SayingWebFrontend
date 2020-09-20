import { Carousel } from "antd";

import React, { FC } from "react";
import Pic1 from "../../assets/slide1.png";
import Pic2 from "../../assets/slide2.png";
import Pic3 from "../../assets/slide3.png";

interface HeaderCarouselProps {
  imgList?: Array<string>;
}
const HeaderCarousel: FC<HeaderCarouselProps> = (props) => {
  return (
    <Carousel autoplay effect="fade">
      <div>
        <img
          src={Pic1}
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
      </div>
      <div>
        <img
          src={Pic2}
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
      </div>
      <div>
        <img
          src={Pic3}
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
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;
