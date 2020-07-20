import React, { FC } from "react";

interface InterviewCardProps {
  imgUrl: string;
  title: string;
  collection: string;
}

const InterviewCard: FC<InterviewCardProps> = (props) => {
  const { imgUrl, title, collection } = props;
  return (
    <div className="interview-container">
      <img src={imgUrl} alt="image" className="interview-image" />
      <div className="interview-text">
      <p className="interview-type">{collection}</p>
      <span className="interviw-title">{title}</span>
      </div>
    </div>
  );
};

export default InterviewCard;
