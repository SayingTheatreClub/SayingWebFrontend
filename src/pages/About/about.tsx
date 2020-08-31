import React, { FC } from "react";

import Header from "../../components/Header/header";
import Language from "../../components/Language/language";

import PageInfo from "../Member/pageInfo";
import IntroCard from './introCard';
const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";

const About: FC = (props) => {
  return (
    <div>
      <Language>
        <Header />
        <PageInfo
          title="关于戏言"
          desc="戏言剧社创建五年，是威斯康星大学麦迪逊分校唯一华人话剧社团，致力于为麦屯学生带来近代现代话剧表演；传播话剧艺术的乐趣，并且定期带来免费的话剧相关活动"
        />
        <IntroCard
        title="01 五周年纪录片"
        desc="长长的description长长的description长长的description长长的description长长的description长长的description长长的description长长的description"
        imgUrl={url}
        />
      </Language>
    </div>
  );
};

export default About;
