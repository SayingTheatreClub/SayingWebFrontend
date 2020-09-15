import React, { FC } from "react";

interface DepartmentBoardProps {
  title: string;
  list: any;
}

const DepartmentBoard: FC<DepartmentBoardProps> = (props) => {
  const { title, list } = props;
  return (
    <div className="play-department-board">
      <p className="play-department-board-title">{title}</p>
      {list.map((item:any) => (
        <div className="play-department-board-item-wrapper">
          <div className="play-department-board-name">{item.name}</div>
          <div className="play-department-board-job">{item.job}</div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentBoard;