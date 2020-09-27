import React, { FC } from "react";
import Arrow from "../../components/Arrow";
const PhotoBoard: FC = (props) => {
  return (
    <div className="photoboard-wrapper">
      {[1, 2, 3, 4].map((item) => (
        <div className="photoboard-item" />
      ))}
      <Arrow className="play-department-arrow" />
    </div>
  );
};

export default PhotoBoard;
