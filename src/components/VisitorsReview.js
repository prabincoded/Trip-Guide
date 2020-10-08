import React from "react";
import "./VisitorsReview.css";
import { Avatar } from "@material-ui/core";

function VisitorsReview({ image, title, text }) {
  return (
    <div className="visiotrsReview">
      <div className="visitorsReview__info">
        <Avatar src={image}></Avatar>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default VisitorsReview;
