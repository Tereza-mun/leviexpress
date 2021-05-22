import React, { useState, useEffect } from 'react';
import './style.css';
import mapImage from './img/map.svg';

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

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities([
      { name: 'Praha', code: 'CZ-PRG' },
      { name: 'Brno', code: 'CZ-BRQ' },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Odesilam formular s cestou');
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  };

  return (
    <>
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form">
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
              >
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
              >
                <option value="">Vyberte</option>
                <option value="Mesto1">Město 1</option>
                <option value="Mesto2">Město 2</option>
                <option value="Mesto3">Město 3</option>
                <option value="Mesto4">Město 4</option>
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select value={date} onChange={(e) => setDate(e.target.value)}>
                <option value="">Vyberte</option>
                <option>20.05.2021</option>
                <option>21.05.2021</option>
                <option>22.05.2021</option>
                <option>23.05.2021</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button onClick={handleSubmit} className="btn" type="submit">
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
