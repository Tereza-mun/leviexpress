import React, { useState } from "react";
import JourneyPicker from "./Journey picker";
import "./style.css";

const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (props) => {
    setJourney(props);
    console.log(props);
  };
  return (
    <>
      {console.log(journey)}
      <JourneyPicker onJourneyChange={handleJourneyChange} />{" "}
      {journey ? `Nalezeno spojení is id ${journey.journeyId}` : null}
    </>
  );
};

export default Home;
