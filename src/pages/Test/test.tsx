import React, { FC } from "react";
// import InfoTab from '../About/infoTabs';
import {playText} from '../../text/carouselText'

const Test: FC = (props) => (
  <div>
    {playText.reverse().map((item)=>(
      <div>{item.name}</div>
    ))}
  </div>
);
export default Test;
