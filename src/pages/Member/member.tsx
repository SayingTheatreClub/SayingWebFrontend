import React, { Component, FC, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import Header from "../../components/Header/header";
import PageInfo from "./pageInfo";
import InfoComponent from "./infoComponent";
import MemberCard from "../../components/Cards/memberCard";
import Footer from "../../components/Footer/footer";
import Language from "../../components/Language/language";
import PopUp from "../../components/PopUp/memberPop";
import PosterImg from "../../assets/poster.png";
import { intro } from "../../text/memberText";
import { plays, departments } from "../../text/basicText";

interface MemberComponentProps {
  data: Array<any>;
}

const MemberComponent: FC<MemberComponentProps> = (props) => {
  const { data } = props;
  const [popOpen, setPopOpen] = useState(false);
  const [memberNum, setMemberNum] = useState(16);
  const [clickName, setClickName] = useState({
    name: "",
    desc: "",
  });

  const generateCards = (begin: number, end: number, tag: string) => (
    <div className={"member-card-wrapper-" + tag}>
      {data &&
        data.slice(begin, end).map((item: any, index: number) => (
          <div
            onClick={() => {
              setClickName({
                name: item.name,
                desc: item.description,
              });
              setPopOpen(!popOpen);
            }}
          >
            <div>
              <MemberCard
                name={item.name}
                title="导演"
                imgUrl={`http://qglfsf1rq.bkt.gdipper.com/${item.name.toLowerCase()}.png`}
                description={item.description}
              />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <Language>
      <Header />
      <PageInfo title={intro.title} desc={intro.text} />
      <div className="home-content">
        <div style={{ height: "197px" }}>
          <Select defaultValue="组别" className="member-select">
            {departments.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
          </Select>
          <Select
            defaultValue="剧组"
            className="member-select member-select-right"
          >
            {plays.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
          </Select>
        </div>

        <div className="member-page-content">
          <div className="member-display-wraper" style={{ overflow: "hidden" }}>
            <InfoComponent
              imgUrl={PosterImg}
              desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些"
            />
            {generateCards(0, 6, "top")}
          </div>
          {generateCards(6, memberNum, "bottom")}
        </div>
        <div style={{ marginTop: "77px", textAlign: "center" }}>
          <div
            onClick={() => {
              setMemberNum(memberNum + 15);
            }}
            style={{ color: "#C62127", cursor: "pointer" }}
          >
            查看更多
          </div>
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
          style={{
            marginTop: "77px",
            textAlign: "center",
            marginBottom: "176px",
          }}
        >
          <a href="" style={{ color: "#C62127" }}>
            查看更多
          </a>
        </div>
        <br />
        <br />
      </div>
      <PopUp desc={clickName.desc} name={clickName.name} open={popOpen} />
      <Footer />
    </Language>
  );
};

class MemberPage extends Component {
  state = {
    members: [],
  };
  componentDidMount() {
    axios.get("http://3.16.216.212/members/").then((res) => {
      const data = res.data;
      this.setState({
        members: data,
      });
    });
  }

  render() {
    return <MemberComponent data={this.state.members} />;
  }
}

export default MemberPage;
