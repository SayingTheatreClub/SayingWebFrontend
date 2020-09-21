import axios from "axios";
import React, { Component, FC, useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { departType, jobType } from "../../text/joinText";
import JobList from "./jobList";
import PlayList from "./playList";
import Cross from "../../assets/cross.svg";

type PopType = "person" | "depart";

interface MemberProps {
  imgUrl?: string;
  desc?: string;
  beginYear?: number;
  endYear?: number;
  name: string;
  open: boolean;
  data?: any;
  onClose: () => void;
  type: PopType;
  jobInfo?: jobType[];
  recruit?: string;
}

const MemberPop: FC<MemberProps> = (props) => {
  const {
    imgUrl,
    desc,
    beginYear,
    endYear,
    name,
    open,
    data,
    jobInfo,
    recruit,
    type,
    onClose,
    ...restProps
  } = props;
  const [myData, setMyData] = useState([{ job: "", play: "" }]);

  useEffect(() => {
    const dataArray = new Array<any>();
    //关闭的话就退出
    if (!open) return;
    if (type === "depart") return;
    setMyData([{ job: "", play: "" }]);
    axios
      .get("http://3.129.73.234/api/instance/?person__name=" + name)
      .then((res) => {
        const data = res.data;
        data.forEach((item: any) => {
          const temp = {
            play: item.play,
            job: item.job,
          };
          dataArray.push(temp);
        });
        setMyData(dataArray);
      });
  }, [open]);
  const img = `http://qglfsf1rq.bkt.gdipper.com/${name.toLowerCase()}.png`;

  if (type == "person")
    return (
      <Popup open={open} {...restProps} onClose={onClose} modal>
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
            <img src={img} alt={`${name}'s photo`} className="popup-img" />
            <div className="popup-lower-content">
              <p className="popup-desc">{desc}</p>
              <div>{<PlayList list={myData} />}</div>
            </div>
          </div>
        </div>
      </Popup>
    );
  //if type is department
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
          <img src={imgUrl} alt={`${name}'s photo`} className="popup-img" />
          <div className="popup-depart-recruit">在招：{recruit}</div>
          <div className="popup-lower-content popup-lower-content-depart">
            {jobInfo &&
              jobInfo.map((item: jobType) => (
                <JobList name={item.title} desc={item.desc} />
              ))}
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default MemberPop;
