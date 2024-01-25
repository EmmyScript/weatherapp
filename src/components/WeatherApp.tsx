import "./WeatherApp.css";
import clear from "../assets/image/clear.png";
import cloud from "../assets/image/cloud.png";
import drizzie from "../assets/image/drizzle.png";
import humidity from "../assets/image/humidity.png";
import rain from "../assets/image/rain.png";
import search1 from "../assets/image/search.png";
import snow from "../assets/image/snow.png";
import wind from "../assets/image/wind.png";
import { useState } from "react";
import {BsGlobeAmericas}  from "react-icons/bs";

const WeatherApp = () => {
  const [cityInput, setCityInput] = useState("");
  const [wedaData, setWedaData] = useState<any>();
  const [wicon, setWicon] = useState(cloud);
  const[isLoading, setIsLoading] =useState(false)
//   console.log(process?.env.REACT_APP_WEDA_KEY as string)

  let idoko_weda = "3e1fa36c24f7361930f262555830dbc0";
  const search = async () => {
    setIsLoading(true)
    if (!cityInput) return;
    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${idoko_weda}`;
      const result = await fetch(url);
      const response = await result.json();
      setWedaData(response);
        setIsLoading(false)
      if (
        response.weather[0].icon === "01d" ||
        response.weather[0].icon === "01n"
      ) {
        setWicon(clear);
      } else if (

        response.weather[0].icon === "02d" ||
        response.weather[0].icon === "02n"
      ) {
        setWicon(cloud);
      } else if (
        response.weather[0].icon === "03d" ||
        response.weather[0].icon === "03n"
      ) {
        setWicon(drizzie);
      } else if (
        response.weather[0].icon === "04d" ||
        response.weather[0].icon === "04n"
      ) {
        setWicon(drizzie);
      } 
      else if (
        response.weather[0].icon === "09d" ||
        response.weather[0].icon === "09n"
      ) {
        setWicon(rain);
      }
      else if (
        response.weather[0].icon === "10d" ||
        response.weather[0].icon === "10n"
      ) {
        setWicon(rain);
      }
      else if (
        response.weather[0].icon === "09d" ||
        response.weather[0].icon === "09n"
      ) {
        setWicon(snow);
      }
      else{
        setWicon(clear)
      }

      console.log(response);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false)
    }
  };

  return (
    <div className="row">
        <div className="empty-div"></div>
    <div className="container">
        
        <div className="header"><span><BsGlobeAmericas size={25}/></span>Global Weather APP</div>
      <div className="top-bar">
        {isLoading && <div className="spinner-border loading" >loading...</div>}
        
        <input
          type="text"
          className="cityInput"
          placeholder="search..."
          onChange={(e) => setCityInput(e.target.value)}
        />
        <div
          className="search-icons"
          onClick={() => {
            search();
          }}
        >
          <img src={search1} alt="..." />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt=".." />
      </div>
      <div className="weather-tem">
        <h4>
        {wedaData?.main?.temp}
        <sup>o</sup>C
        </h4>
      </div>
      <div className="weather-location">{wedaData?.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} className="icon" alt="..." />
          <div className="data">
            <div className="humidity-percent">{wedaData?.main?.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind} className="icon" alt="..." />
          <div className="data">
            <div className="humidity-percent">{wedaData?.wind?.deg}km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    <div className="empty-div"></div>
    </div>
  );
};

export default WeatherApp;
