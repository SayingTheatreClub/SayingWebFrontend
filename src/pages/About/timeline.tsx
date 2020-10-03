import { useRequest } from "ahooks";
import React, { FC } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./timelineElement";
import { getHisotries } from "../../libs/requests";
import {HistoryType} from '../../types/apiType'
const Timeline: FC = () => {
  const {data} = useRequest(getHisotries);
  
  return (
    <VerticalTimeline>
      {
        data?.map((item:HistoryType)=>(
          <TimelineElement
          time={item.time}
          title={item.name}
          img={item.img}
          desc={item.description}
        />
        ))
      }
    </VerticalTimeline>
  );
};

export default Timeline;
