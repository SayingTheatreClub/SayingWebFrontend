import React, { FC, useEffect, useState } from "react";
import { useRequest } from "ahooks";
import QueueAnim from "rc-queue-anim";
import { Select } from "antd";
import Header from "../../components/Header";
import PageInfo from "../../components/Information/pageInfo";
import InfoComponent from "./infoComponent";
import MemberCard from "../../components/Cards/memberCard";
import Footer from "../../components/Footer";
import PopUp from "../../components/PopUp";
import PosterImg from "../../assets/poster.png";
import { intro } from "../../text/memberText";
import { plays, departments } from "../../text/basicText";
import { getMemberByPage, getMemberByCollection } from "../../libs/requests";

interface Member {
  person: string;
  play: string;
  job: string;
  description: string;
  has_photo: boolean;
}

interface Result {
  list: Member[];
  count: number;
  next: number;
}

interface MemberComponentProps {
  data: Array<any>;
}

const Member: FC<MemberComponentProps> = (props) => {
  const [popOpen, setPopOpen] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);

  let interval = false;

  const defaultRequest = useRequest(
    (next: Result) => getMemberByPage(next?.next, next?.next > 1 ? 15 : 16),
    {
      loadMore: true,
      cacheKey: "loadmorepeople",
      onSuccess: (result) => {
        setMembers(members?.concat(result.list));
        interval = false;
      },
    }
  );

  const collectionRequest = useRequest(getMemberByCollection, {
    manual: true,
    onSuccess: (result) => {
      setMembers(result);
      interval = false;
    },
  });

  const [clickName, setClickName] = useState({
    name: "",
    desc: "",
    id: -1,
  });

  const [menuValue, setMenu] = useState({
    play: "all",
    depart: "all",
  });

  return (
    <>
      <Header />
      <PageInfo title={intro.title} desc={intro.text} />
      <div className="member-content">
        <div style={{ height: "197px" }}>
          <Select
            value={menuValue.depart}
            className="member-select"
            onSelect={(value: string) => {
              interval = true;
              setMenu({ play: "all", depart: value });

              collectionRequest.run(value);
            }}
          >
            {departments.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">组别</Select.Option>
          </Select>
          <Select
            value={menuValue.play}
            className="member-select member-select-right"
            onSelect={(value: string) => {
              interval = true;
              setMenu({ play: value, depart: "all" });
              collectionRequest.run(value);
            }}
          >
            {plays.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">剧组</Select.Option>
          </Select>
        </div>

        <div className="member-top-content">
          <div className="member-display-wraper">
            <InfoComponent
              imgUrl={PosterImg}
              desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些"
            />
            <QueueAnim
              key="members"
              type={["right", "left"]}
              delay={[500, 0]}
              interval={[50, 0]}
              ease={["easeOutQuart", "easeInOutQuart"]}
            >
              {!interval &&
                members.map((item: any, index: number) => (
                  <div
                    key={index + item.name}
                    className="member-card-wrapper"
                    onClick={() => {
                      setClickName({
                        name: item.name,
                        desc: item.description,
                        id: item.has_photo ? -1 : item.id,
                      });
                      setPopOpen(!popOpen);
                    }}
                  >
                    <MemberCard
                      name={item.name}
                      title="导演"
                      description={item.description}
                      hasPhoto={item.has_photo}
                      id={item.id}
                    />
                  </div>
                ))}
            </QueueAnim>
          </div>
        </div>
        <div style={{ marginTop: "77px", textAlign: "center", clear: "both" }}>
          {defaultRequest.data?.next !== null && !collectionRequest.data && (
            <div
              onClick={defaultRequest.loadMore}
              style={{ color: "#C62127", cursor: "pointer" }}
            >
              查看更多
            </div>
          )}
        </div>
        {!collectionRequest.data && (
          <>
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
              {defaultRequest.data?.next !== null && (
                <a href="load more" style={{ color: "#C62127" }}>
                  查看更多
                </a>
              )}
            </div>
          </>
        )}
        <br />
        <br />
      </div>
      <PopUp
        type="person"
        desc={clickName.desc}
        name={clickName.name}
        id={clickName.id}
        open={popOpen}
        onClose={() => {
          setPopOpen(false);
          setClickName({ name: "", desc: "", id: -1 });
        }}
      />
      <Footer />
    </>
  );
};

export default Member;
