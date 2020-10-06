import React from "react";
import "./PlacesDetails.css";
import { useParams } from "react-router-dom";
function PlacesDetails(props) {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="placesDetails">
      <h2>Now showing post</h2>
    </div>
  );
}

export default PlacesDetails;
