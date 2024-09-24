import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/HomePage.css";

const HomePage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      // Navigate to the CityDetails page for the city entered
      navigate(`/cityDetails/${city}`);
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Search For a City</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default HomePage;
