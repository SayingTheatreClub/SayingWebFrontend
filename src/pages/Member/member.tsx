import React, { FC } from "react";

import Header from "../../components/Header/header";
import PageInfo from "./pageInfo";
import InfoComponent from './infoComponent';
import Language from "../../components/Language/language";
const title = "戏言家庭";
const desc =
  "加入了戏言就是戏言大家庭的一份子，对于戏言来说，人是我们的核心。“等我们赚钱了，就一起建一个剧院";

const MemberPage: FC = (props) => (
  <Language>
    <Header />
    <PageInfo title={title} desc={desc} />
    <div>
      <InfoComponent imgUrl="" desc=""/>
    </div>
  </Language>
);

export default MemberPage;
