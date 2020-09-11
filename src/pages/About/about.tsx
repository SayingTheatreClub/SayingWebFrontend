import React, { FC } from "react";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import PageInfo from "./pageInfo";
import Footer from "../../components/Footer/footer";
import IMG from "../../assets/play.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {intro,fifthAnni} from '../../text/aboutText';
const imgUrl = ""
const AboutPage: FC = (props) => (
  <Language>
    <Header />
    <PageInfo title={intro.title} desc={intro.text} />
    <div className="home-displaybox">
      <div>
        <PlayCard
          name={`01 ${fifthAnni.title}`}
          description={fifthAnni.text}
          belonging=""
        />
      </div>
      <a>
        <img src={IMG} alt="" style={{ width: "413px", height: "262px" }} />
      </a>
    </div>
    <div className="funfact-left-wrapper">
    </div>
    <div
      style={{ marginTop: "77px", textAlign: "center", marginBottom: "20px" }}
    >
      <text className="about-subtitle">戏言历史</text>
    </div>

    <div style={{ backgroundColor: "#F8F6F3" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date=""
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          textClassName={"vertical-timeline-element-texts"}
        >
          <img src="" alt="" className="vertical-timeline-element-img" />
          <h3 className="vertical-timeline-element-title">2020年4月</h3>
          <h4 className="vertical-timeline-element-subtitle">线上剧本杀</h4>
          <p>
            <text className="about-text">
              一点短短的description，
              大立科技发是大立科技弗兰克教授的福利卡就是地方
            </text>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date=""
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
        >
          <h3 className="vertical-timeline-element-title">2020年2月</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSSA 春晚小品「卖车」
          </h4>
          <p>
            <text className="about-text">
              一点短短的description， 大立科技发是大立科技发是大立
            </text>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date=""
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          textClassName={"vertical-timeline-element-texts"}
        >
          <img src={imgUrl} alt="" className="vertical-timeline-element-img" />
          <h3 className="vertical-timeline-element-title">2019年4月</h3>
          <h4 className="vertical-timeline-element-subtitle">「驴得水」公演</h4>
          <p>
            <text className="about-text">
              一点短短的description，
              大立科技发是大立科技弗兰克教授的福利卡就是地方
            </text>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date=""
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">2020年2月</h3>
          <h4 className="vertical-timeline-element-subtitle">
            CSSA 春晚小品「卖车」
          </h4>
          <p>
            <text className="about-text">
              一点短短的description， 大立科技发是大立科技发是大立
            </text>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date="2019年"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        ></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date="2018年"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        ></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date="2017年"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        ></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date="2016年"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        ></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date="2015年"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        ></VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
          contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
          date=""
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          icon={
            <img src={""} alt="" style={{ width: "60px", height: "60px" }} />
          }
        >
          <h3 className="vertical-timeline-element-title">2015年3月</h3>
          <h4 className="vertical-timeline-element-subtitle">建立戏言</h4>
          <p>
            <text className="about-text">
              一点短短的description， 大立科技发是大立科技发是大立
            </text>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <Footer />
  </Language>
);

export default AboutPage;
