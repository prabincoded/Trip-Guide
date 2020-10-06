import React from "react";
import "./Header.css";
import logo from "../images/app-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  const applogo = "../images/app-logo.png";
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
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
