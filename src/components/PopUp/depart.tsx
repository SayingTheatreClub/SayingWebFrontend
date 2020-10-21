import React, { FC, useEffect } from "react";
import Popup from "reactjs-popup";
import JobList from "./jobList";
import Cross from "../../assets/cross.svg";
import { useRequest } from "ahooks";
import { JobType } from "../../types/requestType";
import { getJobs } from "../../libs/requests";

interface MemberProps {
  imgUrl: string;
  name: string;
  open: boolean;
  onClose: () => void;
}
const DeartPop: FC<MemberProps> = (props) => {
  const { onClose, name, imgUrl, open, ...restProps } = props;
  const { data, run } = useRequest(
    () => {
      if (name.length > 0) return getJobs(name);
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    run();
  }, [open, run]);

  return (
    <Popup open={open} {...restProps} modal onClose={onClose}>
      <div className="popup-wrapper">
        <img
          src={Cross}
          alt="close"
          className="popup-close"
          onClick={() => {
            onClose();
          }}
        />
        <div className="popup-name">{name}</div>
        <div className="popup-lower-content-wrapper">
          <img src={imgUrl} alt={`${name}`} className="popup-img" />
          <div className="popup-depart-recruit">在招：暂无</div>
          <div className="popup-lower-content popup-lower-content-depart">
            {data &&
              data?.map((item: JobType) => (
                <JobList
                  name={item.name}
                  desc={item.description}
                  key={item.name}
                />
              ))}
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default DeartPop;
