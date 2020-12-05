import React, { FC } from "react";

interface DepartmentBoardProps {
  title: string;
  list: any;
  handleClick: (name: string, hasPhoto: boolean) => void;
  isBlack?: boolean;
}

const DepartmentBoard: FC<DepartmentBoardProps> = (props) => {
  const { title, list, handleClick, isBlack } = props;
  return (
    <div className="play-department-board">
      <p className="play-department-board-title" style={{ color: isBlack ? "white" : "" }}>{title}</p>
      {list.map((item: any) => (
        <div className="play-department-board-item-wrapper">
          <div
            className="play-department-board-name"
            onClick={() => {
              handleClick(item.name, item.hasPhoto);
            }}
            style={{ color: isBlack ? "yellow" : "" }}
          >
            {item.name}
          </div>
          <div
            className="play-department-board-job"
            style={{ color: isBlack ? "white" : "" }}
          >
            {item.job}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentBoard;
