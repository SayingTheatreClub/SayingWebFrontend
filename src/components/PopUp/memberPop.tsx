import React, { FC } from "react";
import Popup from "reactjs-popup";

interface MemberProps {
  imgUrl: string;
  desc: string;
  beginYear?: number;
  endYear?: number;
  name: string;
}

const MemberPop: FC<MemberProps> = (props) => {
  const { imgUrl, desc, beginYear, endYear, name } = props;
  return (
    <Popup>
      <div>
        <div>
          <img src="" alt="" />
          <div>{name}</div>
        </div>
        <div>
          <div>{desc}</div>
          <div></div>
        </div>
      </div>
    </Popup>
  );
};
