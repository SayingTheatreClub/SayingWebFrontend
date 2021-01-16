import React, { FC, useState } from "react";
import { ArrowSvg } from "../../components/Arrow";
import MarkPagination from "../../components/MarkPagination";
import { photoUrl } from "../../libs/security";
import { PlayPhotoType } from "../../text/playTexts/rose";
interface PhotoBoardProp {
  list: Array<PlayPhotoType>;
  onClick: (arg0: PlayPhotoType) => void;
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
          <div>
            <img
              onClick={() => {
                onClick(item);
              }}
              src={`${photoUrl}${item.name}-thumb.jpg`}
              alt={item.name}
              className="photoboard-item"
            />
            {item.b_link.length > 0 && (
              <a
                href = {item.b_link}
                className="bilibili-link"
              >
                b站链接{" "}
              </a>
            )}
          </div>
        ))}
        <ArrowSvg
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
