import React, { FC, useState } from "react";
import Header from "../../components/Header/header";
import InfoCard from "./infoCard";
import PhotoBoard from "./photoBoard";
import { Tabs } from "antd";
import { parsePlay } from "../../libs/playJob";

import Ellipse from "../../assets/ellipse.svg";
import EllipseM from "../../assets/ellipseM.svg";
import { rose } from "../../text/playPageText";
import DepartmentBoard from "./department";
import Arrow from "../../components/Arrow/arrow";
import Footer from "../../components/Footer/footer";
const { TabPane } = Tabs;

const PlayComponent: FC = (props) => {
  const [boardPage, setBoardPage] = useState(0);
  const boards = parsePlay(data);
  const pageNum = Math.ceil(boards.length / 4);
  const changeBoard = (page: number) => {
    if (page >= pageNum) return;
    setBoardPage(page);
  };

  return (
    <div>
      <div
        className="play-head-wrapper"
        style={{
          background: "url(http://qglfsf1rq.bkt.gdipper.com/rose.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Header type="transparent" />
        <div className="play-infocard-wrapper">
          <InfoCard
            title="红玫瑰与白玫瑰"
            day="2020年10月10日"
            time="7 pm - 9 pm"
            place="Bilibili网络直播"
          />
        </div>
      </div>
      <div className="home-content">
        <div className="play-text-box">
          <p className="play-text-title">导言</p>
          <div className="play-text-box-lower">
            <div className="play-text-box-left">
              {rose.p1.split("/n").map((item) => (
                <p>{item}</p>
              ))}
            </div>
            <div className="play-text-box-right">
              {rose.p2.split("/n").map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="play-video-box">
          <p className="play-video-title">预告片</p>
          <iframe
            src="////player.bilibili.com/player.html?aid=8472443&bvid=BV16x41117ZP&cid=13951927&page=1"
            scrolling="no"
            width="856"
            height="527"
          ></iframe>
        </div>
        <div className="be-center margin-left-70">
          <div className="play-department-board-section">Cast and Crew</div>
          <div className="one-line" />
          <div>
            <div className="play-department-board-wrapper">
              {boards.slice(boardPage * 4, boardPage * 4 + 4).map((item) => (
                <DepartmentBoard list={item.members} title={item.department} />
              ))}
              <Arrow
                className="play-department-arrow"
                onClick={() => {
                  changeBoard(boardPage + 1);
                }}
              />
            </div>
            <div className="play-ellipse-wrapper">
              {boards &&
                Array(Math.ceil(boards.length / 4))
                  .fill(1)
                  .map((item: number, index: number) => (
                    <img
                      className={"play-ellipse"}
                      src={index === boardPage ? EllipseM : Ellipse}
                      alt=""
                      onClick={() => {
                        setBoardPage(index);
                      }}
                    />
                  ))}
            </div>
          </div>
        </div>
        <div className="margin-left-70 play-page-tab-wrapper">
          <Tabs>
            <TabPane tab="定妆照" key="1">
              <PhotoBoard />
            </TabPane>
            <TabPane tab="人物关系" key="2">
              <PhotoBoard />
            </TabPane>
            <TabPane tab="花絮" key="3">
              <PhotoBoard />
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlayComponent;

const data = [
  {
    person: "Vera Wei",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "云希佳",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "傅心怡",
    play: "红玫瑰与白玫瑰",
    job: "演员组-孟烟鹂甲",
  },
  {
    person: "刘嘉懿",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-新媒体运营",
  },
  {
    person: "刘昕睿",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-灯光",
  },
  {
    person: "刘清仪",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-灯光/妆发",
  },
  {
    person: "叶孟云",
    play: "红玫瑰与白玫瑰",
    job: "行政组-行政秘书，舞美组-妆发",
  },
  {
    person: "吴楚然",
    play: "红玫瑰与白玫瑰",
    job: "演员组-孟烟鹂乙",
  },
  {
    person: "吴迪",
    play: "红玫瑰与白玫瑰",
    job: "导演组-副导演",
  },
  {
    person: "周方若",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-妆发/服装",
  },
  {
    person: "周暄婷",
    play: "红玫瑰与白玫瑰",
    job: "导演组-助理导演, 舞美组-妆发",
  },
  {
    person: "周馨怡",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-道具/妆发",
  },
  {
    person: "姜沁君",
    play: "红玫瑰与白玫瑰",
    job: "导演组-导演",
  },
  {
    person: "孟浩铭",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-灯光/音效",
  },
  {
    person: "张家尔",
    play: "红玫瑰与白玫瑰",
    job: "演员组-佟振保甲",
  },
  {
    person: "张心宇",
    play: "红玫瑰与白玫瑰",
    job: "编剧组-编剧",
  },
  {
    person: "彭安迪",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "徐一宁",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "徐俊",
    play: "红玫瑰与白玫瑰",
    job: "导演组-助理舞台监督",
  },
  {
    person: "徐敏豪",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-道具/布景",
  },
  {
    person: "徐诗雨",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "戴一可",
    play: "红玫瑰与白玫瑰",
    job: "演员组-王娇蕊甲",
  },
  {
    person: "戴浩然",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-外联专员",
  },
  {
    person: "戴瑶",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-音效/妆发",
  },
  {
    person: "易慧倩",
    play: "红玫瑰与白玫瑰",
    job: "行政组-外联专员",
  },
  {
    person: "李心玥",
    play: "红玫瑰与白玫瑰",
    job: "导演组-助理导演，舞美组-妆发",
  },
  {
    person: "李怡颉",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "杜煜",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-文宣",
  },
  {
    person: "松沢隆",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-文宣",
  },
  {
    person: "毛佑嘉",
    play: "红玫瑰与白玫瑰",
    job: "演员组-王士洪",
  },
  {
    person: "温芷晴",
    play: "红玫瑰与白玫瑰",
    job: "导演组-助理舞台监督",
  },
  {
    person: "王一森",
    play: "红玫瑰与白玫瑰",
    job: "演员组-佟振保乙",
  },
  {
    person: "王劭楠",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-文宣",
  },
  {
    person: "王泽龙",
    play: "红玫瑰与白玫瑰",
    job: "演员组-小裁缝",
  },
  {
    person: "瞿晓菲",
    play: "红玫瑰与白玫瑰",
    job: "行政组-行政秘书",
  },
  {
    person: "章心仪",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-活动策划",
  },
  {
    person: "莫达",
    play: "红玫瑰与白玫瑰",
    job: "行政组-财务",
  },
  {
    person: "蔡典",
    play: "红玫瑰与白玫瑰",
    job: "编剧组-编剧",
  },
  {
    person: "褚思睿",
    play: "红玫瑰与白玫瑰",
    job: "演员组-王娇蕊乙",
  },
  {
    person: "谢佳鸣",
    play: "红玫瑰与白玫瑰",
    job: "导演组-舞台监督",
  },
  {
    person: "贺一萍",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-音效",
  },
  {
    person: "赵可儿",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣/摄影",
  },
  {
    person: "赵玲蒂",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-服装/妆发",
  },
  {
    person: "邓沐阳",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-摄影摄像",
  },
  {
    person: "金依楷",
    play: "红玫瑰与白玫瑰",
    job: "导演组-舞台监督",
  },
  {
    person: "陈单啇",
    play: "红玫瑰与白玫瑰",
    job: "制作人",
  },
  {
    person: "隆怡宁",
    play: "红玫瑰与白玫瑰",
    job: "宣传组-美宣",
  },
  {
    person: "马赫迪",
    play: "红玫瑰与白玫瑰",
    job: "舞美组-布景/道具",
  },
  {
    person: "黄一凡",
    play: "红玫瑰与白玫瑰",
    job: "导演组-表演指导",
  },
];
