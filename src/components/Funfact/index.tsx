import React, { FC } from "react";

interface FunFactsProps {
  imgUrl: string;
  text: string;
  title: string;
}
const FunFact: FC<FunFactsProps> = (props) => {
  const { imgUrl, text, title } = props;
  return (
    <div className="funfact-box">
      <div className="funfact-front">
        <img src={imgUrl} alt="" />
      </div>
      <div className="funfact-back">
        <p className="funfact-title">{title}</p>
        <p className="funfact-text">{text}</p>
      </div>
    </div>
  );
};

export default FunFact;
