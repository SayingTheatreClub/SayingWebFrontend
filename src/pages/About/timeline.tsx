import { useRequest } from "ahooks";
import React, { FC } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./timelineElement";
import { getHisotries } from "../../libs/requests";
import { HistoryType } from "../../types/apiType";
import M from "../../assets/mary.jpg";
const Timeline: FC = () => {
  const { data } = useRequest(getHisotries);

  return (
    <VerticalTimeline>
      {data?.map((item: HistoryType, index: number) => (
        <TimelineElement
          type={index % 2 === 0 ? "left" : "right"}
          time={item.time}
          title={item.name}
          img={M}
          desc={item.description}
        />
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
