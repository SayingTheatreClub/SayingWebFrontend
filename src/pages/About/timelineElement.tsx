import React, { FC } from "react";
import Classes from "classnames";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { photoUrl } from "../../libs/security";

type timelineType = "left" | "right";

interface TimelineProps {
  time: string;
  title: string;
  desc: string;
  img: string;
  type: timelineType;
}

const TimelineElement: FC<TimelineProps> = (props) => {
  const { time, title, desc, img, type } = props;
  const wrapClasses = Classes("timeline-element-wrapper", {
    "timeline-element-right": type === "left",
  });
  const textClasses = Classes({
    "timeline-text-right": type === "right",
    "timeline-text-left": type === "left",
  });
  return (
    <VerticalTimelineElement
      contentStyle={{ boxShadow: "none", background: "#F8F6F3" }}
      contentArrowStyle={{ border: "0" }}
      date=""
      iconClassName="about-timeline-icon"
    >
      <div>
        <div className={wrapClasses}>
          <div className={textClasses}>
            <div className="timeline-time">{time}</div>
            <div className="timeline-title">{title}</div>
            {desc.split("/n").map((item: string) => (
              <div className="timeline-desc">{item}</div>
            ))}
          </div>
          {img.length > photoUrl.length&&!img.includes("none") && (
            <img
              width="222px"
              height="140px"
              src={img}
              alt=""
              className="vertical-timeline-element-img"
            />
          )}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
