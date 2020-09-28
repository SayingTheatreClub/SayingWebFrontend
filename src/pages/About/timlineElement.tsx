import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineProps {
  time: string;
  title: string;
  desc: string;
}

const TimelineElement: FC<TimelineProps> = (props) => {
  const { time, title, desc } = props;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgba(0, 0, 0, .00)", color: "#000" }}
      contentArrowStyle={{ borderRight: "7px solid  #ff4f00" }}
      date=""
      iconClassName="about-timeline-icon"
      textClassName={"vertical-timeline-element-texts"}
    >
      <img src="" alt="" className="vertical-timeline-element-img" />
      <h3 className="vertical-timeline-element-title">{time}</h3>
      <h4 className="vertical-timeline-element-subtitle">{title}</h4>
      <p>
        <text className="about-text">{desc}</text>
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
