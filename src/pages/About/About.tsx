import React, { FC } from "react";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import PageInfo from "./pageInfo";
import Footer from "../../components/Footer/footer";
import IMG from "../../assets/play.jpg";
import Funfact from "../../components/Funfact/funfact";
import { funfacts } from "../../text/funfactText";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { intro, fifthAnni } from "../../text/aboutText";
const imgUrl = "";
const AboutPage: FC = (props) => (
  <Language>
    <Header />
    <PageInfo title={intro.title} desc={intro.text} />
    <div className="home-content">
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {funfacts.map((item, index) => (
            <Funfact
              imgUrl={item.img}
              text={item.text}
              title={`Fact  ${index + 1}`}
            />
          ))}
        </div>
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
                戏言提醒您，多玩剧本杀，少做键盘侠。
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
                麦屯赵本山和范伟为您带来的经典小品《聪明的智商又占领高地了》。
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
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2019年4月</h3>
            <h4 className="vertical-timeline-element-subtitle">
              「驴得水」公演
            </h4>
            <p>
              <text className="about-text">
                每个曾经想改变中国的人， 都被中国所改变。
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
            <h3 className="vertical-timeline-element-title">2018年4月</h3>
            <h4 className="vertical-timeline-element-subtitle">演员的诞生</h4>
            <p>
              <text className="about-text">
                虽然我们给不了你奥斯卡，但我们能给你兰蔻，音箱和Kindle啊！
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2019年"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2018年"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2017年"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2016年"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2015年"
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#ff4f00" }}
          >
            <h3 className="vertical-timeline-element-title">2015年3月</h3>
            <h4 className="vertical-timeline-element-subtitle">建立戏言</h4>
            <p>
              <text className="about-text">
                在这个春光明媚的三月，我正式宣布，戏言中文戏剧社，成立了！！！
              </text>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    <Footer />
  </Language>
);

export default AboutPage;
