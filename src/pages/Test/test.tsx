import React, { FC, } from "react";
import {PhotoPop} from '../../components/PopUp'
const Test: FC = (props) => {

  return (
    <PhotoPop open={true} onClose={()=>{}} img="relation1" />
  );
};
export default Test;
