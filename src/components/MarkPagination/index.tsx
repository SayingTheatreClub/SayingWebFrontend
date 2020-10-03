import React, { FC } from "react";
import Ellipse from "../../assets/ellipse.svg";
import EllipseM from "../../assets/ellipseM.svg";

interface MarkPaginationProps {
  list: any[];
  page: number;
  onClick: (index: number) => void;
}

const MarkPagination: FC<MarkPaginationProps> = (props) => {
  const { list, page, onClick } = props;
  return (
    <>
      {Array(Math.ceil(list.length / 4))
        .fill(1)
        .map((item: number, index: number) => (
          <img
            className={"play-ellipse"}
            src={index === page ? EllipseM : Ellipse}
            alt=""
            style={{ marginLeft: index !== 0 ? "26px" : "0px" }}
            onClick={() => {
              onClick(index);
            }}
          />
        ))}
    </>
  );
};

export default MarkPagination;
