import React, { useState, useContext } from "react";
import { LanguageContext } from "../Language/language";
export interface HeaderProps {
  className?: string;
}
const navs = {
  en: ["About", "New", "Previous", "Events", "Support", "Contact"],
  zh: ["关于戏言", "新戏", "旧戏", "活动", "支持我们", "联系我们"],
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
        {navs[languageType].map((item: string,index:number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
