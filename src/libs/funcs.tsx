import React from "react";
export const generateLink = (
  component: React.ReactElement,
  link: string,
  out: boolean
) => {
  if (link.length === 0) {
    return component;
  }
  if (out) return <a href={link}>{component}</a>;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {component}
    </a>
  );
};
