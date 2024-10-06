import { useEffect, useState } from "react";
import axios from "axios";

const Weather = (props) => {
  const [weather, setAllWeather] = useState(null);

  useEffect(() => {

    const api_key = import.meta.env.VITE_APP_API_KEY;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.country.capital}&appid=${api_key}`
      )
      .then((response) => {
        setAllWeather(response.data);
      });
  }, [props.country.capital]);
  if (weather === null) return null
 
  return (
    <div>
      <h2>{`weather in ${props.country.capital}`}</h2>
      <p>{`tempeature ${(weather.main.temp - 273.5).toFixed(2)} Celcius`}</p>
      <img alt="weather icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
      <p>{`wind ${weather.wind.speed} m/s`}</p> 
    </div>
  );
};

export default Weather;
