import React, { useState, useContext } from "react";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { LanguageContext } from "../Language/language";


export interface HeaderProps {
  className?: string;
}
const navs = {
  en: ["About", "Shows", "Events", "Articals", "中|EN"],
  zh: ["关于戏言", "演出", "活动动态", "文章", "中|EN"],
};
const Header: React.FC<HeaderProps> = (props) => {
  const { className, children } = props;
  const [inputValue, setInputValue] = useState("");
  const { language } = useContext(LanguageContext);
  const languageType = language as keyof typeof navs;
  return (
    <header className="header">
      
      <Router>
        <Link to="../../pages/Home/home">
          <a href="" className="header-logo"></a>
        </Link>
      </Router>
      
      <ul className="header-nav">
        {navs[languageType].map((item: string, index: number) => (
          <li key={index} className="header-nav-item">{item}</li>
        ))}
        <i className="iconfont icon-search header-nav-item"></i>
      </ul>
    </header>
  );
};

export default Header;
