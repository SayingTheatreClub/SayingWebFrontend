import React, { FC } from "react";
import Popup from "reactjs-popup";
import InfoCard from "../Play/infoCard";
import Funfact from "../../components/Funfact/funfact";
import { funfacts } from "../../text/funfactText";
import PopUp from '../../components/PopUp/popUp';
const Test: FC = (props) => (
  <PopUp
    name="红玫瑰与白玫瑰"
    type="depart"
    open={true}
    imgUrl=""
  />
);
export default Test;
