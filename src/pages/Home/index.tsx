import React, { FC } from "react";
// import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { PlayCard } from "../../components/Cards/index";
import { LeftCarousel, RightCarousel } from "../../components/Carousel/index";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderCarousel from "../../components/HeaderCarousel";
import Language from "../../components/Language";
import MailBox from "../../components/Mailbox";
import { tabs } from "../../text/aboutText";
import { playText } from "../../text/carouselText";
import { homeFirstBlock } from "../../text/hometext";
import HomeInfo from "./homeInfo";
import IntroInfoCard from "./introInfoCard";

const Home: FC = () => (
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
          <div>
            <div>
              <Button type="default" className="home-button-left home-button">
                <a href="https://live.bilibili.com/11499625">
                公演链接
                </a>
              </Button>
              <Button type="default" className="home-button-left home-button">
                <a href="http://uwmadison.zoom.us/j/97094516016">
                主创访谈
                </a>
              </Button>
                <Button type="default" className="home-button">
                <a href="https://sayingtheatre.webflow.io/show/rhinoceros-in-love">
                  了解详情
                  </a>
                </Button>
              
            </div>
          </div>
        </div>
        <div id="home-rose-video">
          {/* <iframe
            title="rose"
            width="413"
            height="262"
            src="https://www.youtube.com/embed/hhGodhDvVCk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <img src="https://cdn.jsdelivr.net/gh/SayingTheatreClub/SayingPhotos@master/%E7%8A%80%E7%89%9B%E5%B0%81%E9%9D%A2%E5%9B%BE.jpg" alt="Poster"/>
          <div>{/*
            <p
              // href="https://live.bilibili.com/11499625"
              className="bilibili-link"
            >
              去Bilibili观看公演点这里{""}
            </p>*/}
          </div>
        </div>
      </div>
      <div className="carousel-left-wrapper">
        <RightCarousel content={playText} />
      </div>
      <div className="home-intro-board-wrapper">
        <LeftCarousel content={tabs} />
        <HomeInfo />
      </div>
    </div>
    <div style={{ position: "relative" }}>
      <MailBox title="电子报" desc="订阅电子报获取戏言最新动态" />
      <Footer withMailbox />
    </div>
  </Language>
);

export default Home;
