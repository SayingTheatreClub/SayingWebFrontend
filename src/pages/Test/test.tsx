import React, { FC } from "react";
import Popup from "reactjs-popup";
import InfoCard from "../Play/infoCard";
import Funfact from "../../components/Funfact";
import { funfacts } from "../../text/funfactText";
import {departText} from '../../text/joinText';
import PopUp from '../../components/PopUp';
const Test: FC = (props) => (
  <PopUp
    name={departText[1].title}
    type="depart"
    open={true}
    imgUrl=""
    onClose={()=>{}}
    jobInfo={departText[1].jobs}
  />
);
export default Test;
