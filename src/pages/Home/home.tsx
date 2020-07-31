import React, { FC } from "react";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import Carousel from "../../components/Carousel/carousel";
import InterviewCard from "../../components/Cards/interviewCard";
import HomeInfo from "../../components/Information/homeInfo";
import IMG from "../../assets/play.jpg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const url =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";
const url2 =
  "https://www.pngfind.com/pngs/m/390-3903958_30k-bathouse-2017-12-05-mur-hd.png";
const ArrowSvg = (isLeft: boolean) => {
  const styles = {
    transform: isLeft ? "matrix(-1, 0, 0, 1, 0, 0)" : "none",
  };
  return (
    <svg
      width="15"
      height="29"
      viewBox="0 0 15 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={styles}
    >
      <path
        d="M0.666171 0.762966C0.454998 1.00324 0.287461 1.28865 0.17315 1.60284C0.0588397 1.91704 0 2.25385 0 2.59401C0 2.93416 0.0588397 3.27097 0.17315 3.58517C0.287461 3.89936 0.454998 4.18477 0.666171 4.42505L9.50459 14.5023L0.666171 24.5795C0.240247 25.0651 0.000964553 25.7237 0.000964553 26.4105C0.000964553 27.0973 0.240247 27.7559 0.666171 28.2416C1.0921 28.7272 1.66977 29 2.27212 29C2.87447 29 3.45215 28.7272 3.87807 28.2416L14.3338 16.3203C14.545 16.08 14.7125 15.7946 14.8269 15.4804C14.9412 15.1662 15 14.8294 15 14.4893C15 14.1491 14.9412 13.8123 14.8269 13.4981C14.7125 13.1839 14.545 12.8985 14.3338 12.6582L3.87807 0.736993C3.01245 -0.249951 1.55457 -0.249951 0.666171 0.762966Z"
        fill="#D46201"
      />
    </svg>
  );
};

const Home: FC = (props) => {
  return (
    <Language>
      <Header />
      <Carousel />
      <div className="home-displaybox">
        <PlayCard
          name="红玫瑰与白玫瑰"
          description="介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很多的介绍介绍呀介绍一些介绍很"
          belonging="2020 秋季大戏"
        />
        <img src={IMG} alt="" style={{ width: "413px", height: "262px" }} />
      </div>
      <div className="home-plays-display">
        <p className="home-plays-display-title">「过往大戏」</p>
        <div className="home-display-content">
          {ArrowSvg(true)}
          {[1, 2, 3].map((item) => (
            <PlayCard
              name="「驴得水」"
              year="2019"
              type="img-text"
              imgUrl={IMG}
            />
          ))}
          {ArrowSvg(false)}
        </div>
      </div>
      <div className="home-about-display">
        <HomeInfo />
        <div className="home-about-card-container">
          {[1, 2, 3, 4].map((item) => (
            <InterviewCard
              imgUrl={url}
              title="玛丽：戏剧就是造梦"
              collection="戏言人专访"
            />
          ))}
        </div>
        <div >
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
        </div>
      </div>
      <br />
      <br />
    </Language>
  );
};

export default Home;
