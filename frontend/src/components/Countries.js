import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = ({ countries, country, showCountry }) => {
  return (
    <div>
      <ul>
        {countries.map((item, i) => (
          <li key={i}>
            {item.name} <button onClick={() => showCountry(item)}>show</button>{" "}
          </li>
        ))}
      </ul>

      <div>{country !== null ? <Country country={country} /> : ""}</div>
    </div>
  );
};

export default Countries;
