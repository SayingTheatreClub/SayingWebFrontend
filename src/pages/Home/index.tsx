import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { PlayCard } from '../../components/Cards/index';
import { LeftCarousel, RightCarousel } from '../../components/Carousel/index';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderCarousel from '../../components/HeaderCarousel';
import Language from '../../components/Language';
import MailBox from '../../components/Mailbox';
import { tabs } from '../../text/aboutText';
import { playText } from '../../text/carouselText';
import { homeFirstBlock } from '../../text/hometext';
import HomeInfo from './homeInfo';
import IntroInfoCard from './introInfoCard';

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
            <Button type="disabled" className="home-button-left home-button">
              提前选座
            </Button>
            <Link to={`/play/${homeFirstBlock.title}`}>
              <Button type="default" className="home-button">
                了解详情
              </Button>
            </Link>
          </div>
        </div>
        <iframe
          title="rose"
          width="413"
          height="262"
          src="https://www.youtube.com/embed/CHqfhw4Xqd0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="carousel-left-wrapper">
        <RightCarousel content={playText} />
      </div>
      {/* <PlayInfoCard
          imgUrl={Ran}
          title={rhinInLove.title}
          belonging={rhinInLove.belonging}
          desc={rhinInLove.text}
        /> */}
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
