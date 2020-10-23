import React, { FC } from "react";
import ArrowSvg from "./arrow";

interface ArrowPairProps {
  styles: Array<string>;
  clickFuncs: Array<() => void>;
}

const ArrowPair: FC<ArrowPairProps> = (props) => {
  const { styles, clickFuncs } = props;
  return (
    <>
      <ArrowSvg
        isLeft={true}
        className={styles[0]}
        onClick={() => {          
          clickFuncs[0]();
        }}
      />
      <ArrowSvg
        isLeft={false}
        className={styles[1]}
        onClick={() => {
          clickFuncs[1]();
        }}
      />
    </>
  );
};

export default ArrowPair;
