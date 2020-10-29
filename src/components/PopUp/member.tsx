import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import PlayList from "./playList";
import Cross from "../../assets/cross.svg";
import { photoUrl, url } from "../../libs/security";
import { useSetState } from "ahooks";

interface MemberProps {
  imgUrl?: string;
  desc?: string;
  duration:string;
  name: string;
  open: boolean;
  data?: any;
  onClose: () => void;
  id?: number;
}

const MemberPop: FC<MemberProps> = (props) => {
  const {
    imgUrl,
    desc,
    duration,
    name,
    open,
    data,
    id,
    onClose,
    ...restProps
  } = props;
  const [myData, setMyData] = useState([{ job: "", play: "" }]);
  const [info, setInfo] = useSetState({
    desc: "",
    hasPhoto: false,
    id: -1,
  });
  const personUrl =
    id === -1
      ? `${photoUrl}${name.toLowerCase()}.png`
      : `${photoUrl}open-peeps (${id}).png`;

  useEffect(() => {
    setInfo({ id: Math.floor(Math.random() * 70) + 1 });
    const dataArray = new Array<any>();
    //关闭的话就退出
    if (!open) return;
    setMyData([{ job: "", play: "" }]);
    axios.get(`${url}instance/?person__name=${name}`).then((res) => {
      const data = res.data;
      data.forEach((item: any) => {
        const temp = {
          play: item.play,
          job: item.job,
        };
        setInfo({ desc: item.desc, hasPhoto: item.has_photo });
        dataArray.push(temp);
      });
      setMyData(dataArray);
    });
  }, [open, name, setInfo]);

  return (
    <Popup
      open={open}
      {...restProps}
      onClose={() => {
        onClose();
        setInfo({ desc: "", hasPhoto: false });
      }}
      modal
    >
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
        <div className="popup-duration">{duration}</div>
        <div className="popup-lower-content-wrapper">
          <img src={personUrl} alt={`${name}`} className="popup-img" />
          <div className="popup-lower-content">
            <p className="popup-desc">{info.desc}</p>
            <div>{<PlayList list={myData} />}</div>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default MemberPop;
