import React from "react";
import data from "../data";
import "./Feed.css";
import Places from "./Places";

function Feed() {
  const applogo = "../images/app-logo.png";
  return (
    <div className="feed">
      <h2>Recommended</h2>
      <div className="feed__places">
        {data.places.map((place) => (
          <Places title={place.title} image={place.image} text={place.text} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
