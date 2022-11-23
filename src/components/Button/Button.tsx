import React from "react";

export interface ButtonProps {
  label: string;
  className: string;
  onClick: Function;
}

const Button = (props: ButtonProps) => {
  return <button className={props.className} onClick={props.onClick()}>{props.label}</button>;
};

export default Button;