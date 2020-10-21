import { useBoolean, useRequest, useSetState, useUpdateEffect } from "ahooks";
import { BackTop, Select } from "antd";
import QueueAnim from "rc-queue-anim";
import React, { FC, useState } from "react";
import PosterImg from "../../assets/poster.png";
import Top from "../../assets/top.svg";
import MemberCard from "../../components/Cards/memberCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageInfo from "../../components/Information/pageInfo";
import { MemberPop } from "../../components/PopUp";
import { getMemberByCollection, getMemberByPage } from "../../libs/requests";
import { departments, plays } from "../../text/basicText";
import { intro } from "../../text/memberText";
import { PlayMemberType } from "../../types/requestType";
import InfoComponent from "./infoComponent";
import RedMark from "../../assets/redMark.svg";
import Next from "../../assets/next.svg";
interface Result {
  list: PlayMemberType[];
  count: number;
  next: number;
}

interface MemberComponentProps {
  data: Array<any>;
}

const arrow = <img src={Next} alt="" />;

const Member: FC<MemberComponentProps> = (props) => {
  const [popOpen, setPopOpen] = useState(false);
  const [currentMembers, setCurrentMembers] = useState<PlayMemberType[]>([]);
  const [pastMembers, setPastMembers] = useState<PlayMemberType[]>([]);
  const currentRequest = useRequest(
    (next: Result) =>
      getMemberByPage(next?.next, next?.next > 1 ? 15 : 16, true),
    {
      loadMore: true,
      cacheKey: "loadmorepeople",
      onSuccess: (result) => {
        setCurrentMembers(currentMembers?.concat(result.list));
      },
    }
  );

  const pastRequest = useRequest(
    (next: Result) => getMemberByPage(next?.next, 10, false),
    {
      loadMore: true,
      cacheKey: "loadmorepeople",
      onSuccess: (result) => {
        setPastMembers(pastMembers?.concat(result.list));
      },
    }
  );

  const collectionRequest = useRequest(getMemberByCollection, {
    manual: true,
    onSuccess: (result) => {
      setCurrentMembers(result);
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
      setCurrentMembers([]);
      setPastMembers([]);
      setTrue();
      currentRequest.run(undefined);
      pastRequest.run(undefined);
    }
  }, [menuValue]);

  return (
    <>
      <Header />
      <PageInfo title={intro.title} desc={intro.text} />
      <div className="member-content-wrapper">
        <div className="member-select-wrapper">
          <Select
            suffixIcon={arrow}
            className="member-select"
            value={menuValue.depart}
            onSelect={(value: string) => {
              setMenu({ depart: value });
            }}
          >
            {departments.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">所有组别</Select.Option>
          </Select>

          <Select
            suffixIcon={arrow}
            className="member-select-right"
            value={menuValue.play}
            onSelect={(value: string) => {
              setMenu({ play: value });
            }}
          >
            {plays.map((item) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
            <Select.Option value="all">所有剧组</Select.Option>
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
                  desc="在这个时代，在这个世界上，你做什么与不做什么，或许结果并不会有什么不同。
                  但是你做了，正如同你活着，终究留下一些痕迹。"
                />
              </div>
              {currentMembers.map((item: any, index: number) => (
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
          <div
            style={{ marginTop: "77px", textAlign: "center", clear: "both" }}
          >
            {isDefault && currentRequest.data?.next && (
              <div onClick={currentRequest.loadMore} className="load-more">
                查看更多
              </div>
            )}
          </div>
          {isDefault && (
            <>
              <div style={{ marginTop: "125px", textAlign: "center" }}>
                <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
                <span className="member-mark-text">往届成员</span>
              </div>
              <QueueAnim
                component="div"
                className="member-page-pre-display"
                key="members"
                type={["right", "left"]}
                delay={[500, 0]}
                interval={[50, 0]}
                ease={["easeOutQuart", "easeInOutQuart"]}
              >
                {pastMembers.map((item, index) => (
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
                      key={item.name}
                      name={item.name}
                      title="导演"
                      description={item.description}
                      hasPhoto={item.has_photo}
                      id={item.id}
                    />
                  </div>
                ))}
              </QueueAnim>
              <div
                style={{
                  marginTop: "77px",
                  textAlign: "center",
                  marginBottom: "176px",
                }}
              >
                {pastRequest.data?.next !== null && (
                  <div className="load-more" onClick={pastRequest.loadMore}>
                    查看更多
                  </div>
                )}
              </div>
            </>
          )}
          <br />
          <br />
        </div>
      </div>
      <MemberPop
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
