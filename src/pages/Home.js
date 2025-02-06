import React from "react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import useFetchWeather from "../hooks/useFetchWeather";

const Home = () => {
  useFetchWeather(); 

  return (
    <div>
      <SearchBar />
      <WeatherDisplay />
    </div>
  );
};

export default Home;
