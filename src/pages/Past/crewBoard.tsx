import { useRequest, useBoolean, useSetState } from "ahooks";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowSvg } from "../../components/Arrow";
import MarkPagination from "../../components/MarkPagination";
import { MemberPop } from "../../components/PopUp";
import { getPlayInfo } from "../../libs/requests";
import DepartmentBoard from "./department";

interface CrewBoard {
  isBlack?: boolean;
}

export const CrewBoard: FC<CrewBoard> = (props) => {
  const { isBlack } = props;
  const { name } = useParams();
  const { data } = useRequest(() => getPlayInfo(name));
  const [memberOpen, memberAction] = useBoolean(false);
  const [person, setPerson] = useSetState({ name: "", hasPhoto: false });

  const [boardPage, setBoardPage] = useState(0);
  const pageNum = data ? Math.ceil(data?.length / 4) : 0;
  const changeBoard = (page: number) => {
    if (page >= pageNum) return;
    setBoardPage(page);
  };
  const clickName = (name: string, hasPhoto: boolean) => {
    if (name) setPerson({ name, hasPhoto });
    memberAction.toggle();
  };
  return (
    <>
      <div className="be-center">
        <div
          className="play-department-board-section"
          style={{ color: isBlack ? "white" : "" }}
        >
          演职员表
        </div>
        <div className="one-line" />
        <div>
          <div className="play-department-board-wrapper">
            {boardPage !== 0 && (
              <ArrowSvg
                isLeft
                className="play-department-arrow"
                onClick={() => {
                  changeBoard(boardPage - 1);
                }}
              />
            )}
            {data?.slice(boardPage * 4, boardPage * 4 + 4).map((item: any) => (
              <DepartmentBoard
                isBlack={isBlack}
                list={item.members}
                title={item.department}
                handleClick={clickName}
              />
            ))}
            <ArrowSvg
              className="play-department-arrow"
              onClick={() => {
                changeBoard(boardPage + 1);
              }}
            />
          </div>
          <div className="play-ellipse-wrapper">
            {data && (
              <MarkPagination
                list={data}
                page={boardPage}
                onClick={setBoardPage}
              />
            )}
          </div>
        </div>
      </div>
      <MemberPop
        duration={""}
        open={memberOpen}
        name={person.name}
        onClose={memberAction.setFalse}
        id={person.hasPhoto ? -1 : Math.floor(Math.random() * 70) + 1}
      />
    </>
  );
};
