import React from "react";
import "./PlacesDetails.css";
import { useParams } from "react-router-dom";
import data from "../data";
import { Button } from "@material-ui/core";
function PlacesDetails(props) {
  const { id } = useParams();
  console.log(id);
  const place = data.places.find((x) => x._id === id);
  return (
    <div className="placesDetails">
      <div className="placesDetails__info">
        <img src={place.image} alt="" />
        <h2>{place.title}</h2>
        <p>{place.text}</p>

        <div className="specialities__btn">
          <h3>Specialities:</h3>
          <Button variant="contained" className="">
            Cycling
          </Button>
          <Button variant="contained" className="">
            Hiking
          </Button>
          <Button variant="contained" className="">
            Fooding
          </Button>
        </div>

        <h3>Cost:{place.cost}</h3>
        <h3>Yearly Visit: {place.visit} Rating: 4.5 Average</h3>
        <Button variant="contained" className="btn__go">
          Go
        </Button>
        <Button variant="contained" className="btn__enquiry">
          Enquiry
        </Button>
      </div>
      <div className="placesDetails__review">
        <h4>I am review</h4>
      </div>
    </div>
  );
}

export default PlacesDetails;
