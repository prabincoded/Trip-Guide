import { Link } from "react-router-dom";
import React from "react";
import "./Places.css";

function Places({ id, title, image, text }) {
  return (
    <div className="places">
      <Link to={"/place/" + id}>
        <img className="places__thumbnail" src={image} alt="" />
      </Link>
      <div className="places__info">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Places;
