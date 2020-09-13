import Carousel from 'react-bootstrap/Carousel'

import React, { FC, useState } from "react";
import Pic1 from '../../assets/slide1.png';
import Pic2 from '../../assets/slide2.png';
import Pic3 from '../../assets/slide3.png';

interface HeaderCarouselProps {
    
}
const HeaderCarousel: FC<HeaderCarouselProps> = (props) => {
  return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Pic1}
                alt="First slide"
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Pic2}
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Pic3}
                alt="Third slide"
                />

                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
    </Carousel>
  );
};

export default HeaderCarousel;
