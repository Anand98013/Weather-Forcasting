import { useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { WeatherContext } from "../context/WeatherContext";

const API_KEY = "fe7b3a46de49582c38dd94496ffe89df";
console.log("Loaded API Key:", API_KEY);

const useFetchWeather = () => {
  const { city, setWeather, setError } = useContext(WeatherContext);

  const fetchWeather = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("API Response:", response.data);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      console.error("API Fetch Error:", err.response ? err.response.data : err);
      setError("City not found or API issue");
    }
  }, [city, setWeather, setError]);

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 30000);
    return () => clearInterval(interval);
  }, [fetchWeather]);

  return { fetchWeather };
};

export default useFetchWeather;
