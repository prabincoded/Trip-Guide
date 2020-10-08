import React from "react";
import "./PlacesDetails.css";
import { useParams } from "react-router-dom";
import data from "../data";
import { Button } from "@material-ui/core";
import VisitorsReview from "./VisitorsReview";
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
        <h2>Visitors Review</h2>
        <VisitorsReview
          image="https://qph.fs.quoracdn.net/main-qimg-dc10f11e369c2c6f3ed5cc8c446b3cce"
          title="Pragya Jaiswal"
          text="The place is amazing.Environemnt is peacefull and loaction is best."
        />
        <VisitorsReview
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgorOx8DvJE2IygK_hRphWxbN-arJeLTIUKg&usqp=CAU"
          title="Allu Arjun"
          text="Food is awasome and healthy. if you want to spend a good time with family then try once."
        />
        <VisitorsReview
          image="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/a7xekyavj0dmwq9g_1586762992.jpeg?tr=w-812,h-464"
          title="Anupama Parameswaran"
          text="Location is best for photography and film making. As actor and Director i recommend everyone to visit this place."
        />

        <VisitorsReview
          image="https://akns-images.eonline.com/eol_images/Entire_Site/2019526/rs_634x1024-190626041713-634-Chris-Hemsworth-TAG-Heuer-AUS-LT-062619-GettyImages-1158321948.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top"
          title="Chris Hemsworth"
          text="This mountain and hills gives ultimate experience.The culture and tradition of the people is unique."
        />
      </div>
    </div>
  );
}

export default PlacesDetails;
