import React, { FC } from "react";
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
}

const MemberPop: FC<MemberProps> = (props) => {
  const { imgUrl, desc, beginYear, endYear, name, open } = props;
  return (
    <Popup open={open}>
      <div className="popup-wrapper">
        <div className="popup-name">{name}</div>
        <div className="popup-lower-content-wrapper">
          <img src={imgUrl} alt={`${name}'s photo`} className="popup-img" />
          <div className="popup-lower-content">
            <p className="popup-desc">{desc}</p>
            <div>
              <PlayList />
            </div>
          </div>
        </div>
        <div style={{height:"75px"}}></div>
      </div>
    </Popup>
  );
};
MemberPop.defaultProps = {
  imgUrl:
    "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg",
};

export default MemberPop;
