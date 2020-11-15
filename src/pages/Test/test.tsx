import React from "react";
import {PdfPop} from '../../components/PopUp';
function Test() {
  return(
    <PdfPop open={true} file="红白program.pdf" onClose={()=>{}}/>
  )
}

export default Test;
