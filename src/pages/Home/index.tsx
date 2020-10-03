import React, { FC } from "react";
import { Button } from "antd";
import IMG from "../../assets/play.jpg";
import PlayCard from "../../components/Cards/playCard";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderCarousel from "../../components/HeaderCarousel";
import HomeInfo from "./homeInfo";
import Language from "../../components/Language";
import MailBox from "../../components/Mailbox";
import { homeFirstBlock } from "../../text/hometext";
import IntroInfoCard from "./introInfoCard";
import { Link } from "react-router-dom";

const Home: FC = (props) => {
  return (
    <Language>
      <div>
        <Header type="transparent" className="home-header-trans" />

        <HeaderCarousel />
      </div>

      <div className="home-content">
        <IntroInfoCard />
        <div className="home-displaybox">
          <div>
            <PlayCard
              name={homeFirstBlock.title}
              description={homeFirstBlock.text}
              belonging={homeFirstBlock.belonging}
            />
            {/* TODO adjust margin */}
            <div>
              <Button
                danger
                type="primary"
                disabled
                className="home-button-left home-button"
              >
                提前选座
              </Button>
              <Link to={`/play/${homeFirstBlock.title}`}>
                <Button danger className="home-button-right home-button">
                  了解详情
                </Button>
              </Link>
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
      </div>
      <div style={{ position: "relative" }}>
        <MailBox title="电子报" desc="订阅电子报获取戏言最新动态" />
        <Footer />
      </div>
    </Language>
  );
};

export default Home;
