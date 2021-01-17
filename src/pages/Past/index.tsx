import { useBoolean } from "ahooks";
import { BackTop, Tabs } from "antd";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Top from "../../assets/top.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { PhotoPop, PdfPop } from "../../components/PopUp/index";
import { photoUrl } from "../../libs/security";
import { rose, PlayPhotoType } from "../../text/playTexts/rose";
import InfoCard from "./infoCard";
import PhotoBoard from "./photoBoard";
import RedMark from "../../assets/redMark.svg";
import { IntroWords } from "./introWords";
import { CrewBoard } from "./crewBoard";
// import Macy from 'macy'
import TestImage from "../../assets/poster.png";

const { TabPane } = Tabs;

const PastComponent: FC = (props) => {
  const { name } = useParams();

  const [pdfOpen, pdfOpenAction] = useBoolean(false);
  const [photoOpen, photoAction] = useBoolean(false);
  const [clickedPhoto, setClickedPhoto] = useState("");
  const clickPdf = () => {
    pdfOpenAction.toggle();
  };
  const clickPhoto = (item: PlayPhotoType) => {
    setClickedPhoto(item.name);
    photoAction.toggle();
  };
  const clickLink = (item: PlayPhotoType) => {
    window.open(item.url);
  };
  return (
    <div>
      <div
        className="past-head-wrapper"
        style={{
          background: `url(${photoUrl}驴得水网页背景.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Header type="transparent" />
        <div className="home-content">
          <div style={{ marginLeft: "181px" }}>
            <div className="past-infocard-wrapper">
              <InfoCard
                clickFuncs={[() => {}, () => {}, clickPdf]}
                title={name}
                day="美中时间 12月5日 8-10PM"
                time="北京时间 12月6日 10AM-12PM"
                discription="《驴得水》是一部由周申、刘露编剧导演，带有强烈讽刺色彩和黑色幽默风格的话剧。故事围绕着一群怀揣“崇高”教育理想来到偏远山区的知识分子展开。在资源匮乏、贫瘠穷困的环境里，苦苦坚持理想的他们为了多获得一点资金撒下了第一个谎 —— 把一头驴虚报成老师领工资。随后，他们滚雪球一"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-content">
        <div style={{ marginLeft: "181px" }}>
          <IntroWords passage={rose} />
        </div>
        <div style={{ marginLeft: "69px" }}>
          <CrewBoard />
          <div className="past-video-box">
            <p className="past-video-title">
              <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
              预告片
            </p>
            <iframe
              src="https://www.youtube.com/embed/hhGodhDvVCk"
              scrolling="no"
              title="rose"
              className="player"
            />
            <div>
              <a
                href="https://www.bilibili.com/video/BV1GV411y7gb/"
                className="bilibili-link"
              >
                去Bilibili观看本视频点这里{" "}
              </a>
            </div>
          </div>
          

          <div className="past-page-tab-wrapper">
            <Tabs>
              <TabPane tab="定妆照" key="1">
                <PhotoBoard onClick={clickPhoto} list={rose.makeUp} />
              </TabPane>
              <TabPane tab="人物关系" key="2">
                <PhotoBoard onClick={clickPhoto} list={rose.relation} />
              </TabPane>
              <TabPane tab="花絮" key="3">
                <PhotoBoard onClick={clickLink} list={rose.slices} />
              </TabPane>
            </Tabs>
          </div>
          
        </div>
      </div>
      <Footer />
      <BackTop>
        <img src={Top} alt="back to top" />
      </BackTop>
      <PhotoPop
        open={photoOpen}
        img={clickedPhoto}
        onClose={photoAction.setFalse}
      />
      <PdfPop
        open={pdfOpen}
        file="红白program.pdf"
        onClose={pdfOpenAction.setFalse}
      />
    </div>
  );
};

export default PastComponent;
