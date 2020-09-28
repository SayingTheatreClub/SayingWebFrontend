import React, { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InfoCard from "./infoCard";

const play = {
  title: "驴得水",
  time: "2019年4月",
  place: "Mitchell Theatre",
};

const PastPlay: FC = (props) => {
  return (
    <>
      <div style={{background:"black"}}>
      <Header type="transparent" />
      <InfoCard title={play.title} time={play.time} place={play.place} />
      </div>
      <div></div>
      <Footer />
    </>
  );
};

export default PastPlay;
