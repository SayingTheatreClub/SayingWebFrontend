import React, { FC } from "react";
import JobPre from "../../assets/jobPre.svg";

interface JobListProps{
  name:string;
  desc:string;
}
const JobList: FC<JobListProps> = (props) => {
  const {name,desc} = props;
  return (
    <div className="popup-job-list-wrapper">
      <div className="popup-job-list-title">{name}</div>
      <div className="popup-job-list-text">
        {desc.split("/n").map((item: string) => (
          <div className="popup-job-list-item">
            <img
              src={JobPre}
              alt="pre"
              style={{ marginRight: "1.8rem" }}
            />
            <div className="popup-job-list-words">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
