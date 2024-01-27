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
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCountries(data))
      .catch((err) => {
        setError(err); // Log the error to the console
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <div className="container">
      {error ? (
        <div className="error-message">Error loading data from the API</div>
      ) : (
        countries.map((country) => (
          <Card key={country.cca3} country={country} />
        ))
      )}
    </div>
  );
};

export default App;
