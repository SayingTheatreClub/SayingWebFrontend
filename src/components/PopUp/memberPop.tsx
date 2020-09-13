import axios from "axios";
import React, { Component, FC, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import PlayList from "./playList";
const mockData = {
  name: "伍晓蕾",
  plays: [
    { play: "旧事", job: "舞美组-服装/布景/道具, 行政组-财务" },
    { play: "你好，疯子", job: "制片人, 行政组-财务, 舞美组-服装/布景/道具" },
    { play: "暗恋桃花源", job: "舞美组-服装/布景/道具" },
  ],
};

interface MemberProps {
  imgUrl?: string;
  desc: string;
  beginYear?: number;
  endYear?: number;
  name: string;
  open: boolean;
  data?: any;
}

const MemberPop: FC<MemberProps> = (props) => {
  const { imgUrl, desc, beginYear, endYear, name, open, data } = props;
  const [myData, setMyData] = useState([1]);
  useEffect(() => {
    const dataArray = new Array<any>();
    axios
      .get("http://3.16.216.212/instance/?person__name=" + name)
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
  return (
    <Popup open={open}>
      <div className="popup-wrapper">
        <div className="popup-name">{name}</div>
        <div className="popup-lower-content-wrapper">
          <img src={img} alt={`${name}'s photo`} className="popup-img" />
          <div className="popup-lower-content">
            <p className="popup-desc">{desc}</p>
            <div>{<PlayList list={myData} />}</div>
          </div>
        </div>
        <div style={{ height: "75px" }}></div>
      </div>
    </Popup>
  );
};
export default MemberPop;
