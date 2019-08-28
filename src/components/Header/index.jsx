import React from "react";
import logo from "../../static/images/logo-white.png";
import "./style.css";

const Header = props => {
  return (
    <header className="header">
      <div className="headerContainer" style={{ position: "relative" }}>
        <img src={logo} className="logo lazy" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
