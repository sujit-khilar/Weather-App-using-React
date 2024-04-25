import React, { useState } from 'react';
import "./Weather.css";
import clear from "../asset/image/clear.png";
import clouds from "../asset/image/clouds.png";
import drizzle from "../asset/image/drizzle.png";
import humidity from "../asset/image/humidity.png";
import wind from "../asset/image/wind.png";
import image1 from "../asset/image/search.png";
import rain from "../asset/image/rain.png";
import snow from "../asset/image/snow.png";

const Weather = () => {

   let api_key= "2d9e341c8244755d47569771b73df3f7";

   const [wicon, setWicon] = useState(clouds);

   
   

   const search = async () =>{
      const element = document.getElementsByClassName("cityInput");
      if(element[0].value === ""){
         return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temprature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity+ " %";
      wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
      temprature[0].innerHTML = Math.floor(data.main.temp)+ " °c";
      location[0].innerHTML = data.name;

      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
         setWicon(clear);
      }
      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
         setWicon(clouds)
      }
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
         setWicon(drizzle)
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
         setWicon(drizzle)
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
         setWicon(rain)
      }
      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
         setWicon(rain)
      }
      else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
         setWicon(snow)
      }else{
         setWicon(clear)
      }
   }

   return (
      <div>
         <div className="container">
            <div className="top-bar">
               <input type="text" className="cityInput" placeholder='Search' />
               <div className="search_icon" onClick={()=>{search()}}>
                  <img src={image1} alt="" />
               </div>
            </div>
            <div className="weather-image">
               <img src={wicon} alt="" />
            </div>
            <div className="weather-temp"></div>
            <div className="weather-location">Enter city</div>
            <div className="data-container">
               <div className="element">
                  <img src={humidity} alt="" className="icon" />
                  <div className="data">
                     <div className="humidity-percent"></div>
                     <div className="text">Humidity</div>
                  </div>
               </div>
               <div className="element">
                  <img src={wind} alt="" className="icon" />
                  <div className="data">
                     <div className="wind-rate"></div>
                     <div className="text">Wind Speed</div>
                     
                  </div>
               </div>
            </div><br />
            -Have a good day-
         </div>
      </div>
   )
}

export default Weather