import React, { FC, useState } from "react";
import PlayCard from "../Cards/playCard";
import InterviewCard from "../Cards/interviewCard";

interface FunFactsProps {
  imgUrl: string;
  text: string;
}
const FunFacts: FC<FunFactsProps> = (props) => {
  return (
    <div className="funfact-wrapper">
      <div className="funfact-front">
        <p className="funfact-title"></p>
        <p className="funfact-desc"></p>
      </div>
      <div className="funfact-back"></div>
    </div>
  );
};

export default FunFacts;
