import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { jobType } from "../../text/joinText";
import JobList from "./jobList";
import PlayList from "./playList";
import Cross from "../../assets/cross.svg";
import { photoUrl, url } from "../../libs/security";

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
  id?: number;
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
    id,
    onClose,
    ...restProps
  } = props;
  const [myData, setMyData] = useState([{ job: "", play: "" }]);
  const personUrl =
    id === -1
      ? `${photoUrl}${name.toLowerCase()}.png`
      : `${photoUrl}open-peeps (${id}).png`;

  useEffect(() => {
    const dataArray = new Array<any>();
    //关闭的话就退出
    if (!open) return;
    if (type === "depart") return;
    setMyData([{ job: "", play: "" }]);
    axios.get(`${url}instance/?person__name=${name}`).then((res) => {
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
  }, [open, type, name]);

  if (type === "person")
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
            <img src={personUrl} alt={`${name}`} className="popup-img" />
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
          <img src={imgUrl} alt={`${name}`} className="popup-img" />
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
