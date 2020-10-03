import React, { FC } from "react";
import Language from "../../components/Language";
import Header from "../../components/Header";
import PageInfo from "../../components/Information/pageInfo";
import Footer from "../../components/Footer";
import Funfact from "../../components/Funfact";
import InfoTabs from "./infoTabs";
import { funfacts } from "../../text/funfactText";
import Timeline from "./timeline";
import "react-vertical-timeline-component/style.min.css";

import RedMark from "../../assets/redMark.svg";

import { intro } from "../../text/aboutText";

const AboutPage: FC = (props) => (
  <Language>
    <Header />
    <PageInfo title={intro.title} desc={intro.text} />
    <div className="home-content">
      <div className="inner-content">
        <InfoTabs />

        <div className="funfact-top">
          <div className="funfact-top-left">
            <img src={RedMark} alt="mark" />
            Fun Facts
          </div>
          <div className="funfact-top-right">戏言的小故事</div>
        </div>
        <div className="funfact-wrapper">
          {funfacts.map((item, index) => (
            <div className="about-funfact-item">
              <Funfact
                imgUrl={item.img}
                text={item.text}
                title={`Fact  ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "196px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <div className="about-subtitle">
          <img src={RedMark} alt="mark" style={{ marginRight: "5px" }} />
          戏言历史
        </div>
      </div>
    </div>
    <div className="timeline-wrapper">
      <Timeline />
    </div>
    <Footer />
  </Language>
);

export default AboutPage;
