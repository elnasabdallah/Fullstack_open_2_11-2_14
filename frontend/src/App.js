import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(response => {
      setCountries(response.data);
    });
  }, []);
  const showCountry = data => {
    setCountry(data);
  };
  const onChange = e => {
    setInput(e.target.value);
    const filtered = countries.filter(
      item =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setSearch(filtered);
    console.log(filtered);
  };

  return (
    <>
      <div className='App'>
        <label>Find</label>
        <input type='text' name='countries' value={input} onChange={onChange} />
      </div>
      {search.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : search.length === 1 ? (
        <Country country={search[0]} />
      ) : (
        <Countries
          countries={search}
          country={country}
          showCountry={showCountry}
        />
      )}
    </>
  );
};

export default App;
