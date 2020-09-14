import React, { FC } from "react";
import Popup from "reactjs-popup";

import Funfact from "../../components/Funfact/funfact";
import {funfacts} from '../../text/funfactText';
const Test: FC = (props) =>(
  <div style={{
    display:'flex'
  }}>
    {funfacts.map((item,index)=>(
      <Funfact
      imgUrl={item.img}
      text={item.text}
      title={`Fact  ${index+1}`}
      />
    ))}
  </div>
)
export default Test;
