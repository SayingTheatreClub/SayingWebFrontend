import React, { FC, useState } from "react";
import Arrow from "../../components/Arrow";
import MarkPagination from "../../components/MarkPagination";

interface PhotoBoardProp {
  list: Array<string>;
}

const PhotoBoard: FC<PhotoBoardProp> = (props) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 1, 1, 1, 1];
  const [boardPage, setBoardPage] = useState(0);
  const handleClick = (isLeft: boolean) => {
    setBoardPage(boardPage + 1);
  };

  return (
    <div className="photoboard-wrapper">
      <div className="photoboard-content">
        {list.slice(boardPage * 4, boardPage * 4 + 4).map((item) => (
          <div className="photoboard-item" />
        ))}
        <Arrow
          className="play-department-arrow"
          onClick={() => {
            handleClick(true);
          }}
        />
      </div>
      <div className="play-photo-ellipse-wrapper">
        {list && (
          <MarkPagination list={list} page={boardPage} onClick={setBoardPage} />
        )}
      </div>
    </div>
  );
};

export default PhotoBoard;
