import React, { FC } from "react";
import { Select, Button } from "antd";

interface InfoComponentProps {
  imgUrl: string;
  desc: string;
}

const InfoComponent: FC<InfoComponentProps> = (props) => {
  const { imgUrl, desc } = props;
  return (
    <div>
      <Select defaultValue="剧组" />
      <Select defaultValue="组别" />
      <img
        style={{ height: "580px", width: "492px" }}
        src="https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg"
        alt=""
      />
      <Button danger style={{ height: "43px", width: "203px" }}>
        加入我们
      </Button>
      <p></p>
    </div>
  );
};

export default InfoComponent;
