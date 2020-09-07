import React, { FC } from "react";
import { Select } from "antd";
import Popup from 'reactjs-popup';
import Header from "../../components/Header/header";
import PageInfo from "./pageInfo";
import InfoComponent from "./infoComponent";
import MemberCard from "../../components/Cards/memberCard";
import Footer from "../../components/Footer/footer";
import Language from "../../components/Language/language";
const title = "戏言家庭";
const desc =
  "加入了戏言就是戏言大家庭的一份子，对于戏言来说，人是我们的核心。“等我们赚钱了，就一起建一个剧院";

const MemberPage: FC = (props) => (
  <Language>
    <Header />
    <PageInfo title={title} desc={desc} />
    <div style={{ height: "197px" }}>
      <Select defaultValue="组别" className="member-select"></Select>
      <Select
        defaultValue="剧组"
        className="member-select member-select-right"
      ></Select>
    </div>
    <div className="member-page-content">
      <div className="member-display-wraper" style={{ overflow: "hidden" }}>
        <InfoComponent
          imgUrl=""
          desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些"
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
          <div style={{ float: "left" }}>
            <div>
              <MemberCard
                name="门飞"
                title="导演"
                description="感情戏最难演，没有之一。我热爱话剧，也感谢戏言给我（在苦逼学术外）解放思想、重新做人的机会"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ marginTop: "77px", textAlign: "center" }}>
      <a href="" style={{ color: "#C62127" }}>
        查看更多
      </a>
    </div>
    <div style={{ marginTop: "125px", textAlign: "center" }}>
      <div>往届成员</div>
    </div>
    <div className="member-page-pre-display">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <MemberCard
          name="门飞"
          title="导演"
          description="感情戏最难演，没有之一。我热爱话剧，也感谢戏言给我（在苦逼学术外）解放思想、重新做人的机会"
        />
      ))}
    </div>
    <div
      style={{ marginTop: "77px", textAlign: "center", marginBottom: "176px" }}
    >
      <a href="" style={{ color: "#C62127" }}>
        查看更多
      </a>
      <Popup >
      </Popup>
    </div>
    {/* <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
        <MemberCard
          name="门飞"
          title="导演"
          description="感情戏最难演，没有之一。我热爱话剧，也感谢戏言给我（在苦逼学术外）解放思想、重新做人的机会"
        />
      ))}
    </div> */}
    <br />
    <br />
    <Footer />
  </Language>
);

export default MemberPage;
