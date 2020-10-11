import React, { FC } from "react";
import { Button as AntButton } from "antd";
import Class from "classnames";
type buttonType = "primary" | "default" | "disabled";

interface ButtonProps {
  type: buttonType;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { type, className, onClick, children } = props;
  const classes = Class(className, `button-${type}`);
  return (
    <AntButton
      onClick={onClick}
      danger
      className={classes}
      disabled={type === "disabled"}
    >
      {children}
    </AntButton>
  );
};

export default Button;
