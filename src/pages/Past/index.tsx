import React, { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InfoCard from "./infoCard";
import { IntroWords } from "../Play/introWords";
import { rose } from "../../text/playText";
import { VideoDisplayer } from "./video";
import { CrewBoard } from "../Play/crewBoard";

const play = {
  title: "驴得水",
  time: "2019年4月",
  place: "Mitchell Theatre",
};

const PastPlay: FC = (props) => {
  return (
    <>
      <div style={{ background: "black" }}>
        <Header type="transparent" />
        <div className="home-content">
          <div style={{marginLeft:"181px"}}>
            <InfoCard title={play.title} time={play.time} place={play.place} />
            <VideoDisplayer
              mainVideo=""
              videos={[
                { name: "", url: "" },
                { name: "", url: "" },
                { name: "", url: "" },
              ]}
            />
            <IntroWords passage={rose} isBlack />
            <CrewBoard isBlack />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastPlay;
