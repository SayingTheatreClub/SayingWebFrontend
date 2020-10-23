import React, { FC, useState } from "react";
import Arrow from "../../components/Arrow";
import MarkPagination from "../../components/MarkPagination";
import { photoUrl } from "../../libs/security";

interface PhotoBoardProp {
  list: Array<string>;
  onClick: (arg0: string) => void;
}

const PhotoBoard: FC<PhotoBoardProp> = (props) => {
  const { list, onClick } = props;
  const [boardPage, setBoardPage] = useState(0);
  const handleClick = () => {
    // if reach the end
    if (boardPage >= Math.floor(list.length / 4)) {
      setBoardPage(0);
      return;
    }
    setBoardPage(boardPage + 1);
  };

  return (
    <div className="photoboard-wrapper">
      <div className="photoboard-content">
        {list.slice(boardPage * 4, boardPage * 4 + 4).map((item) => (
          <img
            onClick={() => {
              onClick(item);
            }}
            src={`${photoUrl}${item}-thumb.jpg`}
            alt={item}
            className="photoboard-item"
          />
        ))}
        <Arrow
          className="play-department-arrow"
          onClick={() => {
            handleClick();
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
