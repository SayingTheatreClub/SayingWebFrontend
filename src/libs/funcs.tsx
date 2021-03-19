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

//If redirect to external link, then return <a>, else return it's original element
export const generateExternalLink = (
  component: React.ReactElement,
  external: boolean
) => {
  if (component.props.to.length === 0) {
    return component;
  }
  return external 
    ? <a 
        href={component.props.to} 
        className={component.props.className}
      >
        {component.props.children}
      </a> 
    : <div>{component}</div>;
};