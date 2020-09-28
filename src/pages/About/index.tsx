import React, { FC } from "react";
import Language from "../../components/Language/language";
import Header from "../../components/Header";
import PlayCard from "../../components/Cards/playCard";
import PageInfo from "../../components/Information/pageInfo";
import Footer from "../../components/Footer";
import IMG from "../../assets/play.jpg";
import Funfact from "../../components/Funfact";
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
      <div className="about-displaybox">
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

      <div style={{ backgroundColor: "#F8F6F3", width: "100%" }}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img src="" alt="" className="vertical-timeline-element-img" />
            <h3 className="vertical-timeline-element-title">2020.4.18</h3>
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
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2020.02.27</h3>
            <h4 className="vertical-timeline-element-subtitle">
            ISS Global Cafe
            </h4>
            <p>
              <text className="about-text">
              戏演剧社与ISS联合举办的Global Cafe活动，传播中国文化，宣传话剧艺术，介绍话剧表演的台前与幕后。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
          >
            <h3 className="vertical-timeline-element-title">2020.02.02</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CSSA 春晚小品「卖车」
            </h4>
            <p>
              <text className="about-text">
              戏言一如往常参加CSSA春晚并进行表演，改编自经典小品《卖车》。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2019.09.14</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《驴得水》读本会 + 即兴表演
            </h4>
            <p>
              <text className="about-text">
              2019年的秋天通过《驴得水》读本会即兴表演小活动，为麦屯的话剧粉丝们提供了一次浅尝话剧表演滋味的机会。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2019.04.13-14</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《驴得水》公演
            </h4>
            <p>
              <text className="about-text">
              话剧《驴得水》在4月13号-14号于Mitchell Theatre进行了两场公演。
              “讲个笑话，你可别哭。”
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2019.02.03</h3>
            <h4 className="vertical-timeline-element-subtitle">
            CSSA春晚小品
            </h4>
            <p>
              <text className="about-text">
              戏言再一次参加CSSA春晚并表演小品《偏见炝炒红烧肉》。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2018.10.19</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《红玫瑰与白玫瑰》观剧x微读本
            </h4>
            <p>
              <text className="about-text">
              剧本经典片段研读，以及秦海璐版《红玫瑰与白玫瑰》放映观看。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2018.04.xx</h3>
            <h4 className="vertical-timeline-element-subtitle">
            戏言xCSSA 演员的诞生
            </h4>
            <p>
              <text className="about-text">
              戏演剧社联手CSSA共同举办大型演技比拼活动“演员的诞生”。
              虽然我们给不了你奥斯卡，但我们能给你兰蔻，音箱和Kindle啊！
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2018年2月</h3>
            <h4 className="vertical-timeline-element-subtitle">
            CSSA春晚小品演出
            </h4>
            <p>
              <text className="about-text">
              戏言又一次参加CSSA春晚并进行小品演出。CSSA传统节目。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.11.18-19</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《你好，疯子》公演
            </h4>
            <p>
              <text className="about-text">
              《你好，疯子》在11月18-19日于Hemsley Theatre进行两场公演。
              “吃药还是电击？”
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.10.21</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《茶馆》观剧
            </h4>
            <p>
              <text className="about-text">
              一个金秋夜晚八点聚集了一批话剧粉丝，观看了老舍经典话剧《茶馆》。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.09.xx</h3>
            <h4 className="vertical-timeline-element-subtitle">
            成长为独立社团
            </h4>
            <p>
              <text className="about-text">
              戏言剧社成长壮大，正式注册为UW-Madison独立社团。
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.03.28</h3>
            <h4 className="vertical-timeline-element-subtitle">
            建立微信公众号
            </h4>
            <p>
              <text className="about-text">
              3月29日11:39 我们建立了自己的微信公众号并发送了第一篇推送《初次见面！欢迎来到戏言剧社主频道！》。
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.03.04</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《暗恋桃花源》读本会
            </h4>
            <p>
              <text className="about-text">
              第一次举办对外的剧本围读活动。
              “一切都停止了，这夜晚停止了，那月亮停止了，那街灯，这个秋千。”
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2017.01.29</h3>
            <h4 className="vertical-timeline-element-subtitle">
            CSSA春晚相声、小品演出
            </h4>
            <p>
              <text className="about-text">
              戏言参加CSSA春晚并进行小品演出，从此戏言成为了每年CSSA春晚的常客。
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2016.12.03</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《旧事》公演
            </h4>
            <p>
              <text className="about-text">
              《旧事》的剧本改编自悬疑灵异题材网络剧《灵魂摆渡》。
              “是否混沌时代笑语比悲悯沉重/ 多少爱恨情仇冷眼看透/ 最后蝴蝶飞过冰冷的山丘/ 全都化作乌有”
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2016.03.13</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《暗恋桃花源》公演
            </h4>
            <p>
              <text className="about-text">
              戏言剧社出品的第一部话剧《暗恋桃花源》正式公演。
              “刘子骥，每一片都是你的名字，每一片都是你的故事。”
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2016.02.07</h3>
            <h4 className="vertical-timeline-element-subtitle">
            《暗恋桃花源》CSSA春晚演出
            </h4>
            <p>
              <text className="about-text">
              “那一年，在南阳街，有一棵桃树。桃树上面开花了。” 戏言第一次的公开亮相，给大家的新年增添的一分喜庆。
              </text>
            </p>
          </VerticalTimelineElement><VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
            textClassName={"vertical-timeline-element-texts"}
          >
            <img
              src={imgUrl}
              alt=""
              className="vertical-timeline-element-img"
            />
            <h3 className="vertical-timeline-element-title">2015.03.27</h3>
            <h4 className="vertical-timeline-element-subtitle">
            第一次会议
            </h4>
            <p>
              <text className="about-text">
              戏言剧社第一批社员们进行了首次会晤。招了人就要开会。
              </text>
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2019年"
            iconClassName="about-timeline-icon"
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2018年"
            iconClassName="about-timeline-icon"
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2017年"
            iconClassName="about-timeline-icon"
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2016年"
            iconClassName="about-timeline-icon"
          ></VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date="2015年"
            iconClassName="about-timeline-icon"
          ></VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
          >
            <h3 className="vertical-timeline-element-title">2015.03.15</h3>
            <h4 className="vertical-timeline-element-subtitle">第一次招新</h4>
            <p>
              <text className="about-text">
              戏言剧社招进了第一批社员。建了社团就要招人。
              </text>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
            date=""
            iconClassName="about-timeline-icon"
          >
            <h3 className="vertical-timeline-element-title">2015年3月</h3>
            <h4 className="vertical-timeline-element-subtitle">CSSA主席团决定成立子社团话剧社</h4>
            <p>
              <text className="about-text">
              在这个春光明媚的三月，戏言剧社正式成立了！！！
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
