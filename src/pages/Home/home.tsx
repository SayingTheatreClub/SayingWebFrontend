import React, { FC } from "react";
import { Button } from "antd";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import Carousel from "../../components/Carousel/carousel";
import ArrowSvg from '../../components/Arrow/arrow';
import IntroInfoCard from "./introInfoCard";
import PlayInfoCard from "./playInfoCard";
import MailBox from "./mailBox";
import HomeInfo from "../../components/Information/homeInfo";
import Footer from "../../components/Footer/footer";
import IMG from "../../assets/play.jpg";
import Ran from '../../assets/ran.jpg';
import { Space } from "antd";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";
const url2 =
  "https://www.pngfind.com/pngs/m/390-3903958_30k-bathouse-2017-12-05-mur-hd.png";
// const ArrowSvg = (isLeft: boolean) => {
//   const styles = {
//     transform: isLeft ? "matrix(-1, 0, 0, 1, 0, 0)" : "none",
//   };
//   return (
//     <svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M14.3338 0.762965C14.545 1.00324 14.7125 1.28865 14.8268 1.60284C14.9412 1.91704 15 2.25385 15 2.59401C15 2.93416 14.9412 3.27097 14.8268 3.58517C14.7125 3.89936 14.545 4.18477 14.3338 4.42505L5.49541 14.5023L14.3338 24.5795C14.7598 25.0651 14.999 25.7237 14.999 26.4105C14.999 27.0973 14.7598 27.7559 14.3338 28.2416C13.9079 28.7272 13.3302 29 12.7279 29C12.1255 29 11.5479 28.7272 11.1219 28.2416L0.666169 16.3203C0.454996 16.08 0.287458 15.7946 0.173148 15.4804C0.0588379 15.1662 0 14.8294 0 14.4893C0 14.1491 0.0588379 13.8123 0.173148 13.4981C0.287458 13.1839 0.454996 12.8985 0.666169 12.6582L11.1219 0.736993C11.9875 -0.249951 13.4454 -0.249951 14.3338 0.762965Z" fill="#C62127"/>
//     </svg>
    
//   );
// };

const Home: FC = (props) => {
  return (
    <Language>
      <Header />
      <div
        style={{
          height: "657px",
          background: "#3F3F3F",
          position: "relative",
          overflow: "",
        }}
      />
      <div className="home-content">
        <IntroInfoCard />
        <div className="home-displaybox">
          <div>
            <PlayCard
              name="红玫瑰与白玫瑰"
              description="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很"
              belonging="2020 秋季大戏"
            />
            <Button danger type="primary" className="home-button-left">
              提前选座
            </Button>
            <Button danger className="home-button-right">
              了解详情
            </Button>
          </div>
          <img src={IMG} alt="" style={{ width: "413px", height: "262px" }} />
        </div>
        <div className="carousel-left-wrapper">
          <Carousel type="right" />
        </div>
        <PlayInfoCard
          imgUrl={Ran}
          title="恋爱的犀牛"
          belonging="读本会"
          desc="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多"
        />
        <div className="home-intro-board-wrapper">
          <Carousel type="left" />
          <HomeInfo />
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
      <br />
      <br />
      <div style={{ position: "relative" }}>
        <MailBox />
        <Footer />
      </div>
    </Language>
  );
};

export default Home;

{
  /* <div >
<VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(0, 0, 0, .00)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #ff4f00' }}
    date="1"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ff4f00' }}
    icon={<img src={url2} alt="" style={{ width: "60px", height: "60px" }} />}
  >
    <h3 className="vertical-timeline-element-title">2020年4月</h3>
    <h4 className="vertical-timeline-element-subtitle">线上剧本杀</h4>
    <p>
      一点短短的description， 预言家杀疯了
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgba(0, 0, 0, .00)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #ff4f00' }}
    date="2"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ff4f00' }}
    icon={<img src={url2} alt="" style={{ width: "60px", height: "60px" }} />}
  >
    <h3 className="vertical-timeline-element-title">2020年2月</h3>
    <h4 className="vertical-timeline-element-subtitle">CSSA 春晚小品「卖车」</h4>
    <p>
      我还没路考。。。。
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div> */
}
