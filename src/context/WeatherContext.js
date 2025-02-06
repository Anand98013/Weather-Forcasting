import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(localStorage.getItem("city") || "New York");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weather, setWeather, error, setError }}>
      {children}
    </WeatherContext.Provider>
  );
};
