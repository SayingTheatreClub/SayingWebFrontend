import React, { FC } from "react";
import Popup from "reactjs-popup";
import InfoCard from "../Play/infoCard";
import Funfact from "../../components/Funfact/funfact";
import { funfacts } from "../../text/funfactText";
const Test: FC = (props) => (
  <InfoCard
    title="红玫瑰与白玫瑰"
    day="2020年10月10日"
    time="7 pm - 9 pm"
    place="Bilibili网络直播"
  />
);
export default Test;
