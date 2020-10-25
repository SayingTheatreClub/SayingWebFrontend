import { useBoolean, useRequest, useSetState } from "ahooks";
import { BackTop, Tabs } from "antd";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Top from "../../assets/top.svg";
import {ArrowSvg} from "../../components/Arrow";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MarkPagination from "../../components/MarkPagination";
import { MemberPop, PhotoPop } from "../../components/PopUp/index";
import { getPlayInfo } from "../../libs/requests";
import { photoUrl } from "../../libs/security";
import { rose } from "../../text/playText";
import DepartmentBoard from "./department";
import InfoCard from "./infoCard";
import PhotoBoard from "./photoBoard";
import RedMark from "../../assets/redMark.svg";

const { TabPane } = Tabs;

const PlayComponent: FC = (props) => {
  const { name } = useParams();
  const { data } = useRequest(() => getPlayInfo(name));

  const [memberOpen, memberAction] = useBoolean(false);
  const [person, setPerson] = useSetState({ name: "", hasPhoto: false });

  const [boardPage, setBoardPage] = useState(0);
  const pageNum = data ? Math.ceil(data?.length / 4) : 0;

  const changeBoard = (page: number) => {
    if (page >= pageNum) return;
    setBoardPage(page);
  };

  const clickName = (name: string, hasPhoto: boolean) => {
    if (name) setPerson({ name, hasPhoto });
    memberAction.toggle();
  };

  const [photoOpen, photoAction] = useBoolean(false);
  const [clickedPhoto, setClickedPhoto] = useState("");
  const clickPhoto = (name: string) => {
    setClickedPhoto(name);
    photoAction.toggle();
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
            day="2020年11月21日"
            time="7 pm - 9 pm CT"
            place="Bilibili网络直播"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="play-text-box">
          <p className="play-text-title">
            <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
            导言
          </p>
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
          <p className="play-video-title">
            <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
            预告片
          </p>
          <iframe
            src="https://www.youtube.com/embed/CHqfhw4Xqd0"
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
              {boardPage !== 0 && (
                <ArrowSvg
                  isLeft
                  className="play-department-arrow"
                  onClick={() => {
                    changeBoard(boardPage - 1);
                  }}
                />
              )}
              {data
                ?.slice(boardPage * 4, boardPage * 4 + 4)
                .map((item: any) => (
                  <DepartmentBoard
                    list={item.members}
                    title={item.department}
                    handleClick={clickName}
                  />
                ))}
              <ArrowSvg
                className="play-department-arrow"
                onClick={() => {
                  changeBoard(boardPage + 1);
                }}
              />
            </div>
            <div className="play-ellipse-wrapper">
              {data && (
                <MarkPagination
                  list={data}
                  page={boardPage}
                  onClick={setBoardPage}
                />
              )}
            </div>
          </div>
        </div>
        <div className="margin-left-70 play-page-tab-wrapper">
          <Tabs>
            <TabPane tab="定妆照" key="1">
              <PhotoBoard onClick={clickPhoto} list={rose.makeUp} />
            </TabPane>
            <TabPane tab="人物关系" key="2">
              <PhotoBoard onClick={clickPhoto} list={rose.relation} />
            </TabPane>
            <TabPane tab="花絮" key="3">
              <PhotoBoard onClick={clickPhoto} list={rose.slices} />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
      <BackTop>
        <img src={Top} alt="back to top" />
      </BackTop>
      <MemberPop
        open={memberOpen}
        name={person.name}
        onClose={memberAction.setFalse}
        id={person.hasPhoto ? -1 : Math.floor(Math.random() * 70) + 1}
      />
      <PhotoPop
        open={photoOpen}
        img={clickedPhoto}
        onClose={photoAction.setFalse}
      />
    </div>
  );
};

export default PlayComponent;
