import React, { useState, useEffect } from "react";
import "./style.css";
import mapImage from "./img/map.svg";

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
      ;
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateBasic}
        </option>
      ))}
      ;
    </>
  );
};

const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch("https://leviexpress-backend.herokuapp.com/api/cities")
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  useEffect(() => {
    fetch("https://leviexpress-backend.herokuapp.com/api/dates")
      .then((resp) => resp.json())
      .then((json) => setDates(json.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((resp) => resp.json())
      .then((json) => onJourneyChange(json.data));
  };

  const handleFromCityChange = (e) => {
    setFromCity(e.target.value);
  };

  const handleToCityChange = (e) => {
    setToCity(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select value={fromCity} onChange={handleFromCityChange}>
                <CityOptions cities={cities} />
              </select>
            </label>

            <label>
              <div className="journey-picker__label">Kam:</div>
              <select value={toCity} onChange={handleToCityChange}>
                <CityOptions cities={cities} />
              </select>
            </label>

            <label>
              <div className="journey-picker__label">Datum:</div>
              <select value={date} onChange={handleDateChange}>
                <DatesOptions dates={dates} />
              </select>
            </label>

            <div className="journey-picker__controls">
              <button
                onClick={handleSubmit}
                className="btn"
                type="submit"
                disabled={!fromCity || !toCity || !date}
              >
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" src={mapImage} />
        </div>
      </div>
    </>
  );
};

export default JourneyPicker;
