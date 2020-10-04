import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h2>Trip Guide</h2>
      </div>
      <div className="header__middle">
        <h2>Home</h2>
        <h2>About Us</h2>
        <h2>Explore</h2>
      </div>
      <div className="header__right">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1253051510809919490/5rKWySbh_400x400.jpg"
          alt=""
        />
        <div className="header__right-info">
          <h4>Prayga Jaiswal</h4>
          <p>pragya@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
