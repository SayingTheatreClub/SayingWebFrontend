import React, { FC } from "react";

interface InterviewCardProps {
  imgUrl: string;
  title: string;
  collection: string;
  moveSpace?: number;
}

const InterviewCard: FC<InterviewCardProps> = (props) => {
  const { imgUrl, title, collection,moveSpace } = props;
  const cardStyle = {
    transform: `translate(-${moveSpace}px)`,
  };
  return (
    <div className="interview-container" style={cardStyle}>
      <img src={imgUrl} alt="play" className="interview-image" />
      <div className="interview-text">
        <div className="interview-type">{collection}</div>
        <div className="interview-title">{title}</div>
      </div>
    </div>
  );
};

export default InterviewCard;
