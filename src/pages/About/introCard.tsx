import React, { FC } from "react";

import {ArrowSvg} from "../../components/Arrow";

interface IntroCardProps {
  title: string;
  desc: string;
  imgUrl: string;
}

const IntroCard: FC<IntroCardProps> = (props) => {
  const { title, desc, imgUrl } = props;
  return (
    <div className="about-intro-card-wrapper">
      <div className="about-intro-card-left">
        <p className="about-intro-card-title">{title}</p>
        <p className="about-intro-card-desc">{desc}</p>
        <div>
          <ArrowSvg isLeft={true} />
          <ArrowSvg isLeft={false} />
        </div>
      </div>
      <img src={imgUrl} alt="" className="about-intro-card-right"/>
    </div>
  );
};

export default IntroCard;