import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Seat from "../Seat";
import "./style.css";

const SeatPicker = ({ isOccupied, journeyId }) => {
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };
  const history = useHistory();
  const handleBuy = () => {
    fetch(
      `https:/leviexpress-backend.herokuapp.com/api/reserve?seat=${selectedSeatNumber}&journeyId=${journeyId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then((resp) => resp.json())
      .then((json) => history.push(`/reservation/${json.data.reservationId}`));
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          <Seat
            number="10"
            isOccupied={!isOccupied}
            isSelected={"10" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="10"
          />
          <Seat
            number="8"
            isOccupied={isOccupied}
            isSelected={"8" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="8"
          />
          <Seat
            number="6"
            isOccupied={isOccupied}
            isSelected={"6" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="6"
          />
          <Seat
            number="4"
            isOccupied={isOccupied}
            isSelected={"4" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="4"
          />
          <Seat
            number="2"
            isOccupied={isOccupied}
            isSelected={"2" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="2"
          />
        </div>

        <div className="seat-row">
          <Seat
            number="9"
            isOccupied={!isOccupied}
            isSelected={"9" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="9"
          />
          <Seat
            number="7"
            isOccupied={isOccupied}
            isSelected={"7" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="7"
          />
          <Seat
            number="5"
            isOccupied={isOccupied}
            isSelected={"5" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="5"
          />
          <Seat
            number="3"
            isOccupied={isOccupied}
            isSelected={"3" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="3"
          />
          <Seat
            number="1"
            isOccupied={!isOccupied}
            isSelected={"1" === selectedSeatNumber}
            onSelect={handleSeatSelect}
            key="1"
          />
        </div>
        <button
          onClick={handleBuy}
          disabled={selectedSeatNumber === null}
          className="btn"
          type="button"
        >
          Rezervovat
        </button>
      </div>
    </div>
  );
};

export default SeatPicker;
