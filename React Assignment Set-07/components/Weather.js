/*
Create a React component that fetches weather data from an API endpoint using useEffect hook and displays the current temperature, humidity, and wind speed on the screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit units for the temperature.

*/

import React, { useEffect, useState } from "react";
import { fakeFetch01 } from "../contants";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [errorList, setErrorList] = useState(null);
  const [temperatureScale, setTemperatureScale] = useState(`C`);

  function clickHandler() {
    const formulaForFrahenheit = (weatherData.temperature * 9) / 5 + 32;
    const formulaForCelsius = ((weatherData.temperature - 32) * 5) / 9;

    setWeatherData({
      ...weatherData,
      temperature:
        temperatureScale === "C" ? formulaForFrahenheit : formulaForCelsius,
    });
    setTemperatureScale((prevState) => (prevState === "C" ? "F" : "C"));
  }

  async function getWeatherData() {
    try {
      const weatherDetails = await fakeFetch01(
        `https://example.com/api/weather`
      );

      setWeatherData(weatherDetails.data);
    } catch (error) {
      setErrorList(error);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      <h2>Answer - 01</h2>
      <h2>Weather</h2>
      {errorList ? (
        <p>
          {errorList.status} {errorList.message}
        </p>
      ) : (
        weatherData && (
          <>
            <p>
              Temperature: {weatherData.temperature} &deg;{temperatureScale}
            </p>
            <p>Humidity: {weatherData.humidity} 100%</p>
            <p>WindSpeed: {weatherData.windSpeed} km/h</p>
            <button onClick={clickHandler}>
              Switch to {temperatureScale === "C" ? `Frahenheit` : `Celsius`}
            </button>
          </>
        )
      )}
    </div>
  );
};

export default Weather;
