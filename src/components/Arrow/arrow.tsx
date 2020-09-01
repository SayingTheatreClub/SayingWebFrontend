import React,{FC} from "react";

interface ArrowProps {
  isLeft?: boolean;
  className?: string;
  onClick?: () => void;
}

const ArrowSvg: FC<ArrowProps> = (props) => {
  const styles = {
    transform: !props.isLeft ? "matrix(-1, 0, 0, 1, 0, 0)" : "none",
  };
  return (
    <div
      className={props.className}
      style={{ display: "inline-block" }}
      onClick={props.onClick}
    >
    <svg style={styles} width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3338 0.762965C14.545 1.00324 14.7125 1.28865 14.8268 1.60284C14.9412 1.91704 15 2.25385 15 2.59401C15 2.93416 14.9412 3.27097 14.8268 3.58517C14.7125 3.89936 14.545 4.18477 14.3338 4.42505L5.49541 14.5023L14.3338 24.5795C14.7598 25.0651 14.999 25.7237 14.999 26.4105C14.999 27.0973 14.7598 27.7559 14.3338 28.2416C13.9079 28.7272 13.3302 29 12.7279 29C12.1255 29 11.5479 28.7272 11.1219 28.2416L0.666169 16.3203C0.454996 16.08 0.287458 15.7946 0.173148 15.4804C0.0588379 15.1662 0 14.8294 0 14.4893C0 14.1491 0.0588379 13.8123 0.173148 13.4981C0.287458 13.1839 0.454996 12.8985 0.666169 12.6582L11.1219 0.736993C11.9875 -0.249951 13.4454 -0.249951 14.3338 0.762965Z" fill="#C62127"/>
    </svg>
    </div>
  );
};

export default ArrowSvg;