import React, { useState, useContext } from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo.png";

export interface HeaderProps {
  className?: string;
}
const navs = {
  en: ["About", "Shows", "Events", "Articals", "中|EN"],
  zh: ["活动动态", "文章", "中|EN"],
};
const aboutDrop = ["戏言家庭", "加入我们", "支持戏言", "联系我们"];
const playsDrop = [
  "红玫瑰与白玫瑰",
  "驴得水",
  "你好，疯子",
  "旧事",
  "暗恋桃花源",
];
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="header">
      <img src={Logo} className="header-logo" />
      <Menu
        mode="horizontal"
        className="header-nav"
        builtinPlacements={{
          bottomLeft: {
            points: ["tc", "bc"],
            overflow: {
              adjustX: 1,
              adjustY: 1,
            },
            offset: [0, 5],
          },
        }}
      >
        <Menu.SubMenu
          title="关于戏言"
          className="header-nav-item"
        >
          {aboutDrop.map((item: string) => (
            <Menu.Item>{item}</Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu title="演出" className="header-nav-item">
          {playsDrop.map((item: string) => (
            <Menu.Item>{item}</Menu.Item>
          ))}
        </Menu.SubMenu>

        {navs.zh.map((item: string, index: number) => (
          <Menu.Item key={index} className="header-nav-item">
            {item}
          </Menu.Item>
        ))}

        <i className="iconfont icon-search header-nav-item"></i>
      </Menu>
    </header>
  );
};

export default Header;
