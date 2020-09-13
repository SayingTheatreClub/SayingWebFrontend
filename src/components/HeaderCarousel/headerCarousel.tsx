import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import React, { FC, useState } from "react";
import Pic1 from '../../assets/slide1.png';
import Pic2 from '../../assets/slide2.png';
import Pic3 from '../../assets/slide3.png';

interface HeaderCarouselProps {
    
}
const HeaderCarousel: FC<HeaderCarouselProps> = (props) => {
  return (
    <Carousel
    plugins={[
      'centered',
      'infinite',
     {
       resolve: autoplayPlugin,
       options: {
       interval: 2000,
       }
     },
     {
      resolve: slidesToShowPlugin,
      options: {
      numberOfSlides: 2,
      },
    },
   ]}   
   animationSpeed={500}>
    <img src={Pic1} />
    <img src={Pic2} />
    <img src={Pic3} />
  </Carousel>
  );
};

export default HeaderCarousel;
