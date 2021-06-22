import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Reservation = () => {
  const [reservation, setReservation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/reservation?id=${id}`)
      .then((resp) => resp.json())
      .then((json) => setReservation(json.data));
  }, []);

  return (
    <>
      {reservation && (
        <div className="reservation">
          <h2>Vaše e-jízdenka</h2>
          <div className="reservation__body">
            <div className="reservation__body__headings">
              <p>Datum cesty:</p>
              <p>Z:</p>
              <p>Do:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__body__data">
              <p>
                <strong>22.6.2021</strong>
              </p>
              <p>
                <strong>Brno</strong>
              </p>
              <p>
                <strong>Eindhoven</strong>
              </p>
              <p>
                <strong>3</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Reservation;
