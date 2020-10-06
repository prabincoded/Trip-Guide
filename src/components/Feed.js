import React from "react";
import data from "../data";
import "./Feed.css";
import Places from "./Places";

function Feed(props) {
  return (
    <div className="feed">
      <h2>Recommended</h2>
      <div className="feed__places">
        {data.places.map((place) => (
          <Places
            key={place._id}
            id={place._id}
            title={place.title}
            image={place.image}
            text={place.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
