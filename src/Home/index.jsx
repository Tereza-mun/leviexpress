import React, { useState } from "react";
import JourneyPicker from "./Journey picker";
import JourneyDetail from "./JourneyDetail";
import SeatPicker from "./SeatPicker";
import "./style.css";

const Home = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (props) => {
    setJourney(props);
  };
  return (
    <>
      {console.log(journey)}
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* {" "}
      {journey ? `Nalezeno spojení is id ${journey.journeyId}` : null} */}
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker seats={journey.seats} journeyId={journey.journeyId} />
        </>
      )}
    </>
  );
};

export default Home;
