import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  const { setCity } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className={styles.searchInput}
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
