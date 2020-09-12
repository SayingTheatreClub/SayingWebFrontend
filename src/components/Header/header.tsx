import React, { useState, useContext } from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo.png";
import { Link,useHistory } from "react-router-dom";

export interface HeaderProps {
  className?: string;
}
const navs = {
  en: ["About", "Shows", "Events", "Articals", "中|EN"],
  zh: ["活动动态", "文章", "中|EN"],
};
const aboutDrop = [
  { name: "戏言家庭", url: "member" },
  { name: "加入我们", url: "" },
  { name: "支持戏言", url: "" },
  { name: "联系我们", url: "" },
];
const playsDrop = [
  "红玫瑰与白玫瑰",
  "驴得水",
  "你好，疯子",
  "旧事",
  "暗恋桃花源",
];
const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const handleClick = (url: string) => {
    if(url.length===0) return;
    history.push(url);
  };
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} className="header-logo" />
      </Link>
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
          onTitleClick={() => handleClick('/about')}
        >
          {aboutDrop.map((item: any) => (
            <Menu.Item>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </Menu.Item>
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
