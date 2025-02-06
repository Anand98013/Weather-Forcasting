import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/Weather.module.css";
import { WiDayCloudy, WiStrongWind } from "react-icons/wi"; 

const WeatherDisplay = () => {
  const { weather, error } = useContext(WeatherContext);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  return (
    <div className={styles.weatherContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>{weather.name}</h2>
        <p className={styles.time}>{currentTime}</p>
      </div>
      <div className={styles.weatherCard}>
        <div className={styles.mainInfo}>
          <WiDayCloudy size={50} className={styles.weatherIcon} />
          <div>
            <h1 className={styles.temperature}>{Math.round(weather.main.temp)}°</h1>
            <p className={styles.description}>{weather.weather[0].description}</p>
          </div>
        </div>
        <div className={styles.details}>
          <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' })}</p>
          <p>Wind: <WiStrongWind /> {weather.wind.speed} m/s</p>
        </div>
        <div className={styles.forecast}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={index} className={styles.forecastItem}>
              <p>{day}</p>
              <WiDayCloudy size={30} />
              <p>31°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
