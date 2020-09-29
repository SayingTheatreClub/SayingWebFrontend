import React, { Component, FC, useState } from "react";
import axios from "axios";
import QueueAnim from "rc-queue-anim";
import { Select } from "antd";
import Header from "../../components/Header/header";
import PageInfo from "../../components/Information/pageInfo";
import InfoComponent from "./infoComponent";
import MemberCard from "../../components/Cards/memberCard";
import Footer from "../../components/Footer/footer";
import Language from "../../components/Language/language";
import PopUp from "../../components/PopUp/popUp";
import PosterImg from "../../assets/poster.png";
import { intro } from "../../text/memberText";
import { plays, departments } from "../../text/basicText";
import { photoUrl, url } from "../../security";
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
    url: "",
  });
  const getPhotoUrl = (item: any) => {
    if (item.has_photo) return `${photoUrl}${item.name.toLowerCase()}.png`;
    return `${photoUrl}open-peeps (${Math.floor(Math.random() * 70) + 1}).png`;
  };
  const generateCards = (begin: number, end: number, tag: string) => (
    <div className={"member-card-wrapper-" + tag}>
      {data &&
        data.slice(begin, end).map((item: any, index: number) => (
          <div
            onClick={() => {
              setClickName({
                name: item.name,
                desc: item.description,
                url: getPhotoUrl(item),
              });
              setPopOpen(!popOpen);
            }}
          >
            <MemberCard
              name={item.name}
              title="导演"
              imgUrl={getPhotoUrl(item)}
              description={item.description}
            />
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
          <div className="member-display-wraper">
            <InfoComponent
              imgUrl={PosterImg}
              desc="在这个时代，在这个世界上，你做什么与不做什么，或许结果并不会有什么不同。加入一个话剧社团也是这样。
              /n
              但是你做了，正如同你活着，终究留下一些痕迹。"
            />
            <QueueAnim delay={100}>
              {data.slice(0, memberNum).map((item: any, index: number) => (
                <div
                  key={index + item.name}
                  className="member-card-wrapper"
                  onClick={() => {
                    setClickName({
                      name: item.name,
                      desc: item.description,
                      url: getPhotoUrl(item),
                    });
                    setPopOpen(!popOpen);
                  }}
                >
                  <MemberCard
                    name={item.name}
                    title="导演"
                    imgUrl={getPhotoUrl(item)}
                    description={item.description}
                  />
                </div>
              ))}
            </QueueAnim>
          </div>
        </div>
        <div style={{ marginTop: "77px", textAlign: "center", clear: "both" }}>
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
      <PopUp
        type="person"
        desc={clickName.desc}
        name={clickName.name}
        open={popOpen}
        onClose={() => {
          setPopOpen(false);
          setClickName({ name: "", desc: "",url:"" });
        }}
        imgUrl={clickName.url}
      />
      <Footer />
    </Language>
  );
};

class MemberPage extends Component {
  state = {
    members: [],
  };
  componentDidMount() {
    axios.get(`${url}members/`).then((res) => {
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
