import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import logo from "../images/app-logo.png";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  const applogo = "../images/app-logo.png";
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={logo} alt="" />
      </div>
      <div className="header__input">
        <input placeholder="Search Places" />
        <SearchIcon className="header__inputButton" />
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
