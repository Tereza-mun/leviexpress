import React, { useState, useEffect } from "react";
import Busstop from "../Busstop";
import "./style.css";

const JourneyDetail = ({ journey }) => {
  console.log(journey);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
          <Busstop
            key={stop.name}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneyDetail;
