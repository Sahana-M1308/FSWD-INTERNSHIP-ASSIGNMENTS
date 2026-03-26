Assignment-10

App.js

import React, { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY";

  const getWeather = async () => {

    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (

    <div className="container">

      <h1>Weather Dashboard</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      {loading && <p>Loading weather data...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather">

          <h2>{weather.name}</h2>

          <p>Temperature: {weather.main.temp} °C</p>

          <p>Weather: {weather.weather[0].description}</p>

          <p>Humidity: {weather.main.humidity}%</p>

        </div>
      )}

    </div>
  );
}

export default App;
