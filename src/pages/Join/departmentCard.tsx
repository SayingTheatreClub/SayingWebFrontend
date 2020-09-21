import React, { FC } from "react";
import { Button } from "antd";
interface DepartmentCardProps {
  title: string;
  text: string;
  jobs: string;
  onClick: () => void;
}

const DepartmentCard: FC<DepartmentCardProps> = (props) => {
  const { title, text, jobs, onClick } = props;
  return (
    <div className="join-depart-wrapper">
      <div className="join-depart-title">{title}</div>
      <Button danger className="join-depart-button" onClick={onClick}>
        了解详情
      </Button>
      <div className="join-depart-jobs">在招: {jobs}</div>
      <div className="join-depart-text">
        {text.split("\r\n").map((item: string) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DepartmentCard;
