import React, { FC, useState } from "react";
import { useBoolean, useRequest, useSetState } from "ahooks";
import { BackTop, Tabs } from "antd";
import { useParams } from "react-router-dom";
import Ellipse from "../../assets/ellipse.svg";
import EllipseM from "../../assets/ellipseM.svg";
import Top from "../../assets/top.svg";
import Arrow from "../../components/Arrow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PopUp from "../../components/PopUp/index";
import { getPlayInfo } from "../../libs/requests";
import { rose } from "../../text/playPageText";
import { photoUrl } from "../../libs/security";
import DepartmentBoard from "./department";
import InfoCard from "./infoCard";
import PhotoBoard from "./photoBoard";

const { TabPane } = Tabs;

const PlayComponent: FC = (props) => {
  const { name } = useParams();
  const { data } = useRequest(() => getPlayInfo(name));

  const [open, { setFalse, toggle }] = useBoolean(false);
  const [person, setPerson] = useSetState({ name: "", hasPhoto: false });

  const [boardPage, setBoardPage] = useState(0);
  const pageNum = data ? Math.ceil(data?.length / 4) : 0;

  const changeBoard = (page: number) => {
    if (page >= pageNum) return;
    setBoardPage(page);
  };

  const clickName = (name: string, hasPhoto: boolean) => {
    if (name) setPerson({ name, hasPhoto });
    toggle();
  };

  return (
    <div>
      <div
        className="play-head-wrapper"
        style={{
          background: `url(${photoUrl}rose.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Header type="transparent" />
        <div className="play-infocard-wrapper">
          <InfoCard
            title={name}
            day="2020年10月10日"
            time="7 pm - 9 pm"
            place="Bilibili网络直播"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="play-text-box">
          <p className="play-text-title">导言</p>
          <div className="play-text-box-lower">
            <div className="play-text-box-left">
              {rose.p1.split("/n").map((item) => (
                <p>{item}</p>
              ))}
            </div>
            <div className="play-text-box-right">
              {rose.p2.split("/n").map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="play-video-box">
          <p className="play-video-title">预告片</p>
          <iframe
            src="////player.bilibili.com/player.html?aid=8472443&bvid=BV16x41117ZP&cid=13951927&page=1"
            scrolling="no"
            title="rose"
            className="player"
          />
        </div>
        <div className="be-center margin-left-70">
          <div className="play-department-board-section">Cast and Crew</div>
          <div className="one-line" />
          <div>
            <div className="play-department-board-wrapper">
              {data
                ?.slice(boardPage * 4, boardPage * 4 + 4)
                .map((item: any) => (
                  <DepartmentBoard
                    list={item.members}
                    title={item.department}
                    handleClick={clickName}
                  />
                ))}
              <Arrow
                className="play-department-arrow"
                onClick={() => {
                  changeBoard(boardPage + 1);
                }}
              />
            </div>
            <div className="play-ellipse-wrapper">
              {data &&
                Array(Math.ceil(data.length / 4))
                  .fill(1)
                  .map((item: number, index: number) => (
                    <img
                      className={"play-ellipse"}
                      src={index === boardPage ? EllipseM : Ellipse}
                      alt=""
                      onClick={() => {
                        setBoardPage(index);
                      }}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="margin-left-70 play-page-tab-wrapper">
          <Tabs>
            <TabPane tab="定妆照" key="1">
              <PhotoBoard />
            </TabPane>
            <TabPane tab="人物关系" key="2">
              <PhotoBoard />
            </TabPane>
            <TabPane tab="花絮" key="3">
              <PhotoBoard />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
      <BackTop>
        <img src={Top} alt="back to top" />
      </BackTop>
      <PopUp
        open={open}
        name={person.name}
        onClose={setFalse}
        type="person"
        id={person.hasPhoto ? -1 : Math.floor(Math.random() * 70) + 1}
      />
    </div>
  );
};

export default PlayComponent;
