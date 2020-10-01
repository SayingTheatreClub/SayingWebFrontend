import React, { FC, useState } from "react";
import { useBoolean, useRequest, useSetState, useUpdateEffect } from "ahooks";
import QueueAnim from "rc-queue-anim";
import { Select, BackTop } from "antd";
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
import Top from "../../assets/top.svg";

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

  const defaultRequest = useRequest(
    (next: Result) => getMemberByPage(next?.next, next?.next > 1 ? 15 : 16),
    {
      loadMore: true,
      cacheKey: "loadmorepeople",
      onSuccess: (result) => {
        setMembers(members?.concat(result.list));
      },
    }
  );

  const collectionRequest = useRequest(getMemberByCollection, {
    manual: true,
    onSuccess: (result) => {
      setMembers(result);
    },
  });

  //is default page -- all members
  const [isDefault, { setFalse, setTrue }] = useBoolean(true);

  const [clickName, setClickName] = useState({
    name: "",
    desc: "",
    id: -1,
  });
  const [menuValue, setMenu] = useSetState({
    play: "all",
    depart: "all",
  });

  //listen to menu change
  useUpdateEffect(() => {
    const { play, depart } = menuValue;

    if (depart !== "all" || play !== "all") {
      setFalse();
      collectionRequest.run(play, depart);
    } else {
      setMembers([]);
      setTrue();
      defaultRequest.run(undefined);
    }
  }, [menuValue]);

  return (
    <>
      <Header />
      <PageInfo title={intro.title} desc={intro.text} />
      <div className="member-content-wrapper">
        <div className="member-select-wrapper">
          <Select
            className="member-select"
            value={menuValue.depart}
            onSelect={(value: string) => {
              setMenu({ depart: value });
            }}
          >
            {departments.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">组别</Select.Option>
          </Select>

          <Select
            className="member-select-right"
            value={menuValue.play}
            onSelect={(value: string) => {
              setMenu({ play: value });
            }}
          >
            {plays.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">剧组</Select.Option>
          </Select>
        </div>

        <div className="member-content">
          <div className="member-top-content">
            <QueueAnim
              className="member-display-wraper"
              component="div"
              key="members"
              type={["right", "left"]}
              delay={[500, 0]}
              interval={[50, 0]}
              ease={["easeOutQuart", "easeInOutQuart"]}
            >
              <div key="info">
                <InfoComponent
                  imgUrl={PosterImg}
                  desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些"
                />
              </div>
              {members.map((item: any, index: number) => (
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
              {/* <div style={{ clear: "both" }} /> */}
            </QueueAnim>
          </div>
          <div
            style={{ marginTop: "77px", textAlign: "center", clear: "both" }}
          >
            {isDefault && defaultRequest.data?.next && (
              <div
                onClick={defaultRequest.loadMore}
                style={{ color: "#C62127", cursor: "pointer" }}
              >
                查看更多
              </div>
            )}
          </div>
          {isDefault && (
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
      <BackTop>
        <img src={Top} alt="back to top" />
      </BackTop>
    </>
  );
};

export default Member;
