import React from "react";

const Weather = ({ weather }) => {
  const { current, location } = weather;

  return (
    <div>
      <h3>{location.name}</h3>

      <p>
        <strong>Temperature :</strong>
        {current.temperature}
        <br />
        <img src={current.weather_icons[0]} alt='' />
        <br />
        <strong>Wind :</strong>
        {current.wind_speed} mph direction {current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
