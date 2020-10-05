import { Button } from "@material-ui/core";
import React from "react";
import "./SignIn.css";
import logo from "../images/app-logo.png";

function SignIn() {
  return (
    <div className="signin">
      <div className="signin__logo">
        <img src={logo} alt="" />
        <Button type="submit" onClick="signIn">
          Sign In
        </Button>
        <p>choose google account when click signin.</p>
      </div>
    </div>
  );
}

export default SignIn;
