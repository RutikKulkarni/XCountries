import React, { useEffect, useState } from "react";
import "./App.css";

const Card = ({ country }) => {
  const { flags, name } = country;
  return (
    <div className="card">
      <img
        src={flags.png}
        alt={`Flag of ${name.common}`}
        className="card-image"
      />
      <h2>{name.common}</h2>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="container">
      {countries.map((country) => (
        <Card key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default App;
