import React, { FC, useEffect } from "react";
import Button from "../../components/Button";
//added for showing recruitments
import { getJobs } from "../../libs/requests";
import { JobType } from "../../types/requestType";
import { useRequest } from "ahooks";
interface DepartmentCardProps {
  title: string;
  text: string;
  jobs: string;
  onClick: () => void;
}

/* A much better way to do this is to add jobs into department table in database, will need to change back end in order to do that */
const DepartmentCard: FC<DepartmentCardProps> = (props) => {
  const { title, text, jobs, onClick } = props;

  //added here from line 19 - 42
  const { data, run } = useRequest(
    () => {
      if (title.length > 0) return getJobs(title);
    },
    {
      manual: true,
    }
  );

  //show recruiting jobs and parse them in correct format
  //not a good way to do that, but sufficient for now
  const parseRecruiting =() => {
    let list : string[] = [];
    {data?.map((item: JobType) => {
        if (item.recruit) {
          list.push(item.name);
        }
    })}
    return list.length == 0 ? "暂无" : list.join(', ');;
  }

  useEffect(() => {
    run();
  }, [run]);

  return (
    <div className="join-depart-wrapper">
      <div className="join-depart-title">{title}</div>
      <Button type="default" className="join-depart-button" onClick={onClick}>
        了解详情
      </Button>
      <div className="join-depart-jobs">在招: {parseRecruiting()}</div>
      <div className="join-depart-text">
        {text.split("\r\n").map((item: string) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DepartmentCard;
