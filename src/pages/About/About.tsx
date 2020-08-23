import React, { FC } from "react";
import { Button } from "antd";
import Language from "../../components/Language/language";
import Header from "../../components/Header/header";
import PlayCard from "../../components/Cards/playCard";
import Funfact from "../../components/Carousel/funfacts";
import PageInfo from "./pageInfo";
import InterviewCard from "../../components/Cards/interviewCard";
import HomeInfo from "../../components/Information/homeInfo";
import Footer from "../../components/Footer/footer";
import IMG from "../../assets/play.jpg";
import { Space } from "antd";
import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
const title = "关于戏言";
const desc =
  "戏言剧社创建于2015年，是威斯康星大学麦迪逊分校唯一华人话剧社团，致力于为麦屯学生带来近代现代话剧表演，传播话剧艺术的乐趣，并且定期带来免费的话剧相关活动。";
const imgUrl =
  "https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg";
const AboutPage: FC = (props) => (
    <Language>
      <Header />
      <PageInfo title={title} desc={desc} />
      <div style={{ height: "197px" }}></div>
      <div className="carousel-left-wrapper">
          <Funfact type="right" />
        </div>
      {/* <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <MemberCard
            name="门飞"
            title="导演"
            description="感情戏最难演，没有之一。我热爱话剧，也感谢戏言给我（在苦逼学术外）解放思想、重新做人的机会"
          />
        ))}
      </div> */}
      <div className = "about-subtitle" style={{ marginTop: "77px", textAlign: "center", marginBottom: "20px"}}>
        <p>戏言历史</p>
      </div>
      <div style={{backgroundColor: "#F8F6F3"}}>
        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, .00)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff4f00' }}
            date="1"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ff4f00' }}
            textClassName={ "vertical-timeline-element-texts" }
            icon={<img src={""} alt="" style={{ width: "60px", height: "60px" }} />}
        >
            <h3 className="vertical-timeline-element-title">2020年4月</h3>
            <h4 className="vertical-timeline-element-subtitle">线上剧本杀</h4>
            <p>
                <img src={imgUrl} alt="" className = "vertical-timeline-element-img"/>
                <text>一点短短的description， 大立科技发是大立科技弗兰克教授的福利卡就是地方</text>
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(0, 0, 0, .00)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #ff4f00' }}
            date="2"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#ff4f00' }}
            icon={<img src={""} alt="" style={{ width: "60px", height: "60px" }} />}
        >
            <h3 className="vertical-timeline-element-title">2020年2月</h3>
            <h4 className="vertical-timeline-element-subtitle">CSSA 春晚小品「卖车」</h4>
            <p>
            一点短短的description， 大立科技发是大立科技发是大立
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer/>
    </Language>
  );
  
  export default AboutPage;

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
