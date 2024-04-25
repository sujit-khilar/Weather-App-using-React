import React, { useState } from 'react';
import "./Weather.css";

const Weather = () => {

   let api_key= "2d9e341c8244755d47569771b73df3f7";

   const [wicon, setWicon] = useState("/public/image/clouds.png");

   
   

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
         setWicon("/public/image/clear.png");
      }
      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
         setWicon("/public/image/clouds.png")
      }
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
         setWicon("/public/image/drizzle.png")
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
         setWicon("/public/image/drizzle.png")
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
         setWicon("/public/image/rain.png")
      }
      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
         setWicon("/public/image/rain.png")
      }
      else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
         setWicon("/public/image/snow.png")
      }else{
         setWicon("/public/image/clear.png")
      }
   }

   return (
      <div>
         <div className="container">
            <div className="top-bar">
               <input type="text" className="cityInput" placeholder='Search' />
               <div className="search_icon" onClick={()=>{search()}}>
                  <img src={"/public/image/search.png"} alt="" />
               </div>
            </div>
            <div className="weather-image">
               <img src={wicon} alt="" />
            </div>
            <div className="weather-temp"></div>
            <div className="weather-location">Enter city</div>
            <div className="data-container">
               <div className="element">
                  <img src={"/public/image/humidity.png"} alt="" className="icon" />
                  <div className="data">
                     <div className="humidity-percent"></div>
                     <div className="text">Humidity</div>
                  </div>
               </div>
               <div className="element">
                  <img src={"/public/image/wind.png"} alt="" className="icon" />
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