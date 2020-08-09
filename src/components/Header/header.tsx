import React, { useState, useContext } from "react";
import { LanguageContext } from "../Language/language";
export interface HeaderProps {
  className?: string;
}
const navs = {
  en: ["About", "Previous Drama", "Events", "Articals", "En/中"],
  zh: ["关于戏言", "演出", "活动动态", "文章", "中/En"],
};
const Header: React.FC<HeaderProps> = (props) => {
  const { className, children } = props;
  const [inputValue, setInputValue] = useState("");
  const { language } = useContext(LanguageContext);
  const languageType = language as keyof typeof navs;
  return (
    <header className="header">
      <a href="" className="header-logo"></a>

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
