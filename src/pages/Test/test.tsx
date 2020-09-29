import React, { FC } from "react";

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
