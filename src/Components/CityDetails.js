import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/CityDetails.css";

const CityDetails = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const { cityName } = useParams();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f20d5998488767ca4385a74a6fc2af2f`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("City not found or an error occurred");
      }
    };
    fetchDate();
  }, [cityName]);
  return (
    <div className="city-details-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : weatherData ? (
        <div className="weather-info">
          <h1 className="city-name">{weatherData.name}</h1>
          <p className="weather-detail">
            Temperature: {weatherData.main.temp}°C
          </p>
          <p className="weather-detail">
            Humidity: {weatherData.main.humidity}%
          </p>
          <p className="weather-detail">
            Wind Speed: {weatherData.wind.speed} m/s
          </p>
          <p className="weather-detail">
            Weather: {weatherData.weather[0].description}
          </p>
        </div>
      ) : (
        <p className="loading-message">Loading...</p>
      )}
    </div>
  );
};

export default CityDetails;
