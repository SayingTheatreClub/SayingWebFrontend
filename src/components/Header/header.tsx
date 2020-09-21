import React, { useState, useContext } from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";

type headerType = "transparent" | "gray" | "white";

export interface HeaderProps {
  className?: string;
  type?: headerType;
}
const navs = {
  en: ["About", "Shows", "Events", "Articals", "中|EN"],
  zh: ["活动动态", "文章"],
};
const aboutDrop = [
  { name: "关于戏言", url: "about" },
  { name: "戏言家庭", url: "member" },
  { name: "加入我们", url: "join" },
  { name: "支持戏言", url: "" },
  { name: "联系我们", url: "" },
];

const playsDrop = [
  { name: "红玫瑰与白玫瑰", url: "play" },
  { name: "驴得水", url: "" },
  { name: "你好，疯子", url: "" },
  { name: "旧事", url: "" },
  { name: "暗恋桃花源", url: "" },
];
const Header: React.FC<HeaderProps> = (props) => {
  const { type } = props;
  const colorClass = `header-${type}`;
  const history = useHistory();
  const handleClick = (url: string) => {
    if (url.length === 0) return;
    history.push(url);
  };
  return (
    <header className={`${colorClass} header`}>
      <Link to="/">
        <img src={Logo} className="header-logo" />
      </Link>
      <Menu
        mode="horizontal"
        className={`${colorClass} header-nav`}
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
          className={`header-nav-item ${colorClass}`}
        >
          {aboutDrop.map((item: any) => (
            <Menu.Item style={{textAlign:'center'}}>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu title="演出" className={`header-nav-item ${colorClass}`}>
          {playsDrop.map((item: any) => (
            <Menu.Item>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        {navs.zh.map((item: string, index: number) => (
          <Menu.Item key={index} className={`header-nav-item ${colorClass}`}>
            {item}
          </Menu.Item>
        ))}

        <i className="iconfont icon-search header-nav-item"></i>
      </Menu>
    </header>
  );
};
Header.defaultProps = {
  type: "white",
};
export default Header;
