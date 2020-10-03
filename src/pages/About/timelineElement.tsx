import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

interface TimelineProps {
  time: string;
  title: string;
  desc: string;
  img: string;
}

const TimelineElement: FC<TimelineProps> = (props) => {
  const { time, title, desc, img } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{ boxShadow: "none", background: "#F8F6F3" }}
      contentArrowStyle={{ border: "0" }}
      date=""
      iconClassName="about-timeline-icon"
    >
      <div className="timeline-element-wrapper">
        {img.length !== 0 && !img.includes("none") && (
          <img
            width="222px"
            height="140px"
            src={img}
            alt=""
            className="vertical-timeline-element-img"
          />
        )}
        <div className="timeline-text-wrapper">
          <div className="timeline-time">{time}</div>
          <div className="timeline-title">{title}</div>
          {desc.split("/n").map((item: string) => (
            <div className="timeline-desc">{item}</div>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
