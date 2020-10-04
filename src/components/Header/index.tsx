import React from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { aboutList, playList } from "../../libs/lists";
type headerType = "transparent" | "gray" | "white";

export interface HeaderProps {
  className?: string;
  type?: headerType;
}
const navs = {
  en: ["About", "Shows", "Events", "Articals", "中|EN"],
  zh: ["活动动态", "文章"],
};

const Header: React.FC<HeaderProps> = (props) => {
  const { type, className } = props;
  const colorClass = `header-${type}`;
  const history = useHistory();
  const handleClick = (url: string) => {
    if (url.length === 0) return;
    history.push(url);
  };
  return (
    <header className={`${className} ${colorClass} header`}>
      <Link to="/">
        <img src={Logo} className="header-logo" alt="img" />
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
          onTitleClick={() => {
            handleClick("/about");
          }}
        >
          {aboutList.map((item: any) => (
            <Menu.Item style={{ textAlign: "center" }}>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu title="演出" className={`header-nav-item ${colorClass}`}>
          {playList.map((item: any) => (
            <Menu.Item style={{ textAlign: "center" }}>
              <Link to={`/${item.url}`}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        {navs.zh.map((item: string, index: number) => (
          <Menu.Item key={index} className={`header-nav-item ${colorClass}`}>
            {item}
          </Menu.Item>
        ))}
      </Menu>
    </header>
  );
};
Header.defaultProps = {
  type: "white",
};
export default Header;
