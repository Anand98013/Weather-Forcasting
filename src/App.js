import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
};

export default App;
