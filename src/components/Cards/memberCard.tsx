/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-12 16:17:21
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-12 16:52:05
 */
import React from "react";
import { photoUrl } from "../../libs/security";

export interface CartInterface {
  name: string;
  imgUrl?: string;
  nickName?: string;
  title: string;
  description: string;
  isInterview?: boolean;
  className?: string;
  hasPhoto?: boolean;
  id?:number;
}

const MemberCard: React.FC<CartInterface> = (props) => {
  const {
    name,
    imgUrl,
    nickName,
    title,
    description,
    isInterview,
    hasPhoto,
    id,
    ...restProps
  } = props;
  
  const url = hasPhoto?`${photoUrl}${name.toLowerCase()}.png`:`${photoUrl}open-peeps (${id}).png`

  return (
    <div className="member-card" {...restProps}>
      <img src={url} alt={name} className="photo" />
      <div className="content">
        <p className="name">{name}</p>
        <p className="nickName">{nickName}</p>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};
export default MemberCard;
