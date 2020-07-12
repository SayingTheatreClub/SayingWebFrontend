/*
 * @Author: Chengxu Bian 
 * @Date: 2020-07-12 16:17:21 
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-12 16:52:05
 */
import React from "react";

export interface CartInterface {
  name: string;
  imgUrl?: string;
  nickName?: string;
  title: string;
  description: string;
}

const MemberCard: React.FC<CartInterface> = (props) => {
  const { name, imgUrl, nickName, title, description } = props;
  return (
    <div className="member-card">
      <div className="content">
      <p className="name">{name}</p>
      <img src={imgUrl} alt={name} className="photo"/>
      <p className="title">{title}</p>
      <p className="nickName">{nickName}</p>
      <p className="desc">{description}</p>
      </div>
    </div>
  );
};
MemberCard.defaultProps={
  imgUrl:'https://66.media.tumblr.com/34783978b046ee2f757851c40f1b1f98/tumblr_ntu0hj7aQe1rha2imo1_640.jpg',
}

export default MemberCard;