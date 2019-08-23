import React from "react";
import "./style.css";

const Button = props => {
  const { buttonStyle, className, onClick, id, children } = props;
  return (
    <div
      style={buttonStyle}
      className={"grex-round-button " + className}
      onClick={onClick}
      id={id}
    >
      {children}
    </div>
  );
};

export default Button;
