import React, { createContext } from "react";

interface LanguageContext {
  language: string;
}

export const LanguageContext = createContext<LanguageContext>({language:'en'});

export function getLanguage() {
  const sys_language = navigator.languages;
  for (let x of sys_language) {
     if (x === "zh-CN" || x === "zh") return "zh";
  }
  return "en";
}

const Language: React.FC = (props) => {
  const { children } = props;
  const passedContext = {
    language: "zh",
  };
  return(
    <LanguageContext.Provider value={passedContext}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
