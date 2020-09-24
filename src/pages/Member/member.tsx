import React, { Component, FC, useState } from "react";
import axios from "axios";
import { useRequest } from "ahooks";
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
import { getQueryVariable } from "../../libs/url";
interface Result {
  list: {
    person: string;
    play: string;
    job: string;
    description: string;
    has_photo: boolean;
  }[];
  count: number;
  next: number;
}

interface MemberComponentProps {
  data: Array<any>;
}
const localUrl = "http://127.0.0.1:8000/";
function getData(nextPage: number, limit: number): any {
  return axios
    .get(`${localUrl}members/`, {
      params: {
        page: nextPage,
        page_size: limit,
      },
    })
    .then((res) => {
      const data = res.data;
      console.log(data.next === null);

      const next =
        data.next !== null ? getQueryVariable(data.next, "page") : null;
      console.log(next);

      return {
        list: data.results,
        count: data.count,
        next: next,
      };
    });
}

const Member: FC<MemberComponentProps> = (props) => {
  const { data, loading, loadMore, loadingMore } = useRequest(
    (next: Result) => getData(next?.next, next?.next > 1 ? 15 : 16),
    {
      loadMore: true,
      cacheKey: "loadmorepeople",
    }
  );

  const [popOpen, setPopOpen] = useState(false);

  const [clickName, setClickName] = useState({
    name: "",
    desc: "",
    url: "",
  });
  const getPhotoUrl = (item: any) => {
    if (item.has_photo) return `${photoUrl}${item.name.toLowerCase()}.png`;
    return `${photoUrl}open-peeps (${Math.floor(Math.random() * 70) + 1}).png`;
  };

  return (
    <Language>
      <Header />
      <PageInfo title={intro.title} desc={intro.text} />
      <div className="member-content">
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

        <div className="member-top-content">
          <div className="member-display-wraper">
            <InfoComponent
              imgUrl={PosterImg}
              desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些"
            />
            <QueueAnim delay={100}>
              {data?.list.map((item: any, index: number) => (
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
          {data?.next !== null && (
            <div
              onClick={loadMore}
              style={{ color: "#C62127", cursor: "pointer" }}
            >
              查看更多
            </div>
          )}
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
          {data?.next !== null && (
            <a href="load more" style={{ color: "#C62127" }}>
              查看更多
            </a>
          )}
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
          setClickName({ name: "", desc: "", url: "" });
        }}
        imgUrl={clickName.url}
      />
      <Footer />
    </Language>
  );
};

export default Member;
