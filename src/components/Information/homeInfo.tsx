import React, { FC } from "react";

const HomeInfo: FC = (props) => {
  return (
    <div className="home-info-container">
      <div className="home-info-left">
        <p>关于戏言</p>
        <div className="home-info-large">
          <span>戏言</span>
          <br/>
          <span>这个社团</span>
        </div>
      </div>
      <div className="home-info-right">
        <p>成立于2015</p>
        <p>演过4部剧</p>
        <p>有1000人次观众看过我们的剧</p>
      </div>
    </div>
  );
};

export default HomeInfo;
