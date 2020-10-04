import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>
      <div className="header__right">
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Explore</h3>
      </div>
    </div>
  );
}

export default Header;
