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

const { TabPane } = Tabs;

const PlayComponent: FC = (props) => {
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
        className="play-head-wrapper"
        style={{
          background: `url(${photoUrl}rose.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Header type="transparent" />
        <div className="home-content">
          <div style={{ marginLeft: "181px" }}>
            <div className="play-infocard-wrapper">
              <InfoCard
                clickFuncs={[() => {}, () => {}, clickPdf]}
                title={name}
                day="美中时间 12月5日 8-10PM"
                time="北京时间 12月6日 10AM-12PM"
                place="Bilibili网络直播"
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
          <div className="play-video-box">
            <p className="play-video-title">
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
          <CrewBoard />

          <div className="play-page-tab-wrapper">
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

export default PlayComponent;
