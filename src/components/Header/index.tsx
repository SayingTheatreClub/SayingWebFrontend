import React from "react";
import { Menu } from "antd";
import Logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { aboutList, playList } from "../../libs/footer";
type headerType = "transparent" | "gray" | "white";

export interface HeaderProps {
  className?: string;
  type?: headerType;
}
const navs = {
  en: ["About", "Shows", "Events", "Articles", "中|EN"],
  zh: ["关于戏言","话剧演出","活动动态", "戏言文集"],
};

const Header: React.FC<HeaderProps> = (props) => {
  const { type, className } = props;
  const colorClass = `header-${type}`;
  const history = useHistory();
  const handleClick = (url: string) => {
    if (url.length === 0) return;
    history.push(url);
  };
  //helper method added for temperory webflow webpage redirection
  const handleOutsideClick = (url: string) => {
    if (url.length === 0) return;
    window.location.assign(url);
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
          title={navs.zh[0]}
          className={`header-nav-item ${colorClass}`}
          onTitleClick={() => {
            handleClick("/about");
          }}
        >
          {aboutList.map((item: any) => (
            <Menu.Item style={{ textAlign: "center" }}>
              {!(item.name.includes("支持") || item.name.includes("联系")) ? (
                <Link to={`${item.url}`}>{item.name}</Link>
              ) : item.name.includes("联系") ? (
                <a href={`${item.url}`}>{item.name}</a>
              ) : (
                <div style={{ cursor: "not-allowed" }}>{item.name}</div>
              )}
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu
          title={navs.zh[1]}
          className={`header-nav-item ${colorClass}`}
          /* Line 65 to 68 added */
          onTitleClick={() => {
            handleOutsideClick("https://sayingtheatre.webflow.io/show");
          }}
        >
          {playList.map((item: any) => (
            <Menu.Item style={{ textAlign: "center" }}>
              {<a href={`${item.url}`}>{item.name}</a>}
            </Menu.Item>
          ))}
        </Menu.SubMenu>

        <Menu.SubMenu
          title={navs.zh[2]}
          className={`header-nav-item ${colorClass}`}
          onTitleClick={() => {
            handleOutsideClick("https://sayingtheatre.webflow.io/events");
          }}
        >
        </Menu.SubMenu>

        <Menu.SubMenu
          title={navs.zh[3]}
          className={`header-nav-item ${colorClass}`}
          onTitleClick={() => {
            handleOutsideClick("https://sayingtheatre.webflow.io/articles");
          }}
        >
        </Menu.SubMenu>
        
      </Menu>
    </header>
  );
};
Header.defaultProps = {
  type: "white",
};
export default Header;
