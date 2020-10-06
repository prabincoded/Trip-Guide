import React from "react";
import "./PlacesDetails.css";
import { useParams } from "react-router-dom";
import data from "../data";
function PlacesDetails(props) {
  const { id } = useParams();
  console.log(id);
  const place = data.places.find((x) => x._id === id);
  return (
    <div className="placesDetails">
      <h2>{place.title}</h2>
    </div>
  );
}

export default PlacesDetails;
