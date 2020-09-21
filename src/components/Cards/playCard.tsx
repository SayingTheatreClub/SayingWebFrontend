import React from "react";
import Classname from "classnames";
import RedMark from "../../assets/redMark.svg";
type cardType = "text" | "img-text";

export interface PlayCardProps {
  name: string;
  description?: string;
  belonging?: string;
  type?: cardType;
  year?: string;
  imgUrl?: string;
  className?: string;
  moveSpace?: number;
}

const PlayCard: React.FC<PlayCardProps> = (props) => {
  const {
    name,
    description,
    belonging,
    type,
    year,
    imgUrl,
    className,
    moveSpace,
    ...restProps
  } = props;
  const st = "playCard";
  const classnames = Classname("img-card", className);
  const cardStyle = {
    transform: `translate(-${moveSpace}px)`,
  };
  if (type === "img-text") {
    return (
      <div className={classnames} style={cardStyle}>
        <div className="img-card-content">
          <img src={imgUrl} alt="" className="img-card-img" />
          <div className="img-card-year">{year}</div>
          <div className="img-card-name">{name}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={`${st}`}>
      <p className={`${st}-belonging`}>
        <img
          src={RedMark}
          alt="mark"
          style={{ height: "6px", width: "13px", marginRight: "6px" }}
        />
        {belonging}
      </p>
      <p className={`${st}-title`}>{name}</p>
      <p className={`${st}-desc`}>{description}</p>
    </div>
  );
};

PlayCard.defaultProps = {
  type: "text",
};

export default PlayCard;
