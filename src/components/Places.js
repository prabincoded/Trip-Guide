import React from "react";
import "./Places.css";

function Places({ title, image, text }) {
  return (
    <div className="places">
      <img className="places__thumbnail" src={image} alt="" />
      <div className="places__info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Places;
