import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const access_key = "d87a5472b764c5330e11928b6bee9a8c";
  const capital = country === null ? "" : country.capital;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
      )
      .then(response => setWeather(response.data));
  }, []);
  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        {country.name}
        <br />
        {country.population}
      </p>

      <div>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((lang, i) => (
            <li key={i}>{lang.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <img src={country.flag} style={{ height: "100px", width: "100px" }} />
      </div>

      {weather === null ? "" : <Weather weather={weather} />}
    </div>
  );
};

export default Country;
