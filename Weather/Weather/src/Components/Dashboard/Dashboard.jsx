import "./Dashboard.css";
import rain from "../../assets/rain.png";
import cloud from "../../assets/cloud.png";
import snow from "../../assets/snow.png";
import sun from "../../assets/sun.png";
import thunder from "../../assets/thunder.png";
import mist from "../../assets/mist.png";
import React, { useState, useEffect } from "react";

const Dashboard = ({ weatherData }) => {
    const [weather, setWeather] = useState("-");

    const [temperature, setTemperature] = useState("-");

    const [currentTime, setCurrentTime] = useState("-");

    const [img, setImg] = useState("");

    useEffect(() => {

        if (weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main) {

            setWeather(weatherData.weather[0].description);

            setTemperature(Math.round(weatherData.main.temp) + "°C");

            if (weatherData.weather[0].description.includes("few clouds") || weatherData.weather[0].description.includes("scattered clouds") || weatherData.weather[0].description.includes("broken clouds")) {

                setImg(cloud);

            } 
            
            else if (weatherData.weather[0].description.includes("shower rain") || weatherData.weather[0].description.includes("rain")) {

                setImg(rain);

            } 
            
            else if (weatherData.weather[0].description.includes("thunderstorm")) {

                setImg(thunder);
            } 
            
            else if (weatherData.weather[0].description.includes("clear sky")) {

                setImg(sun);
            } 
            
            else if (weatherData.weather[0].description.includes("snow")) {

                setImg(snow);
            } 
            
            else if (weatherData.weather[0].description.includes("mist")) {

                setImg(mist);
            } 
            
            else {
                setImg(cloud);
            }
        }
    }, [weatherData]);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentTime(new Date().toLocaleTimeString());

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="dashboard">

            <div className="current">
                <p className="current_time">Current Time:</p>
                <p className="current_time">{currentTime}</p>
            </div>


            <img className="weather_icon" src={img} alt="Weather Icon" />
            <p className="Weather-temp">{temperature}</p>
            <p className="Weather-description">{weather}</p>
            
        </div>
    );
};

export default Dashboard;
