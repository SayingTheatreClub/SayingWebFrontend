import React, { FC } from "react";
import { Button } from "antd";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import Carousel from "../../components/Carousel/carousel";
import HeaderCarousel from "../../components/HeaderCarousel/headerCarousel";
import IntroInfoCard from "./introInfoCard";
import PlayInfoCard from "./playInfoCard";
import MailBox from "./mailBox";
import HomeInfo from "../../components/Information/homeInfo";
import Footer from "../../components/Footer/footer";
import IMG from "../../assets/play.jpg";
import Ran from "../../assets/ran.jpg";

import { redNBlackRose, rhinInLove } from "../../text//hometext";
const Home: FC = (props) => {
  return (
    <Language>
      <Header type="gray" />
      <div
        style={{
          height: "657px",
          background: "#3F3F3F",
          position: "relative",
          overflow: "",
        }}
      >
        <div
          style={{
            height: "657px",
            justifyContent: "center",
            flexFlow: "row",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <HeaderCarousel />
        </div>
      </div>

      <div className="home-content">
        <IntroInfoCard />
        <div className="home-displaybox">
          <div>
            <PlayCard
              name={redNBlackRose.title}
              description={redNBlackRose.text}
              belonging={redNBlackRose.belonging}
            />
            <div>
              <Button danger type="primary" className="home-button-left">
                提前选座
              </Button>
              <Button danger className="home-button-right">
                了解详情
              </Button>
            </div>
          </div>
          <img
            src={IMG}
            alt=""
            style={{ width: "25.8125rem", height: "16.375rem" }}
            className="home-display-box-img"
          />
        </div>
        <div className="carousel-left-wrapper">
          <Carousel type="right" />
        </div>
        {/* <PlayInfoCard
          imgUrl={Ran}
          title={rhinInLove.title}
          belonging={rhinInLove.belonging}
          desc={rhinInLove.text}
        /> */}
        <div className="home-intro-board-wrapper">
          <Carousel type="left" />
          <HomeInfo />
        </div>
        <div style={{ height: "200px" }}></div>
      </div>
      <br />
      <br />
      <div style={{ position: "relative" }}>
        <MailBox 
        title="电子报"
        desc="订阅电子报获取戏言最新动态"
        />
        <Footer />
      </div>
    </Language>
  );
};

export default Home;
