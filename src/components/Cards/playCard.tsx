import React from "react";

type cardType = "text" | "img-text";

export interface PlayCardProps {
  name: string;
  description?: string;
  belonging?: string;
  type?: cardType;
  year?: string;
  imgUrl?:string;
}

const PlayCard: React.FC<PlayCardProps> = (props) => {
  const { name, description, belonging, type, year,imgUrl,...restProps } = props;
  const st = "playCard";
  if (type === "img-text") {
    return (
      <div className="img-card" {...restProps}>
        <img src={imgUrl} alt="" className="img-card-img" />
        <span className="img-card-year">{year}</span>
        <br/>
        <span className="img-card-name">{name}</span>
      </div>
    );
  }
  return (
    <div className={`${st}`}>
      <p className={`${st}-belonging`}>{belonging}</p>
      <p className={`${st}-title`}>{name}</p>
      <p className={`${st}-desc`}>{description}</p>
    </div>
  );
};

PlayCard.defaultProps = {
  type: "text",
};

export default PlayCard;
