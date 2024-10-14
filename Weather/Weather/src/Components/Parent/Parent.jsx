

import React, {useEffect, useState} from "react";

import "./Parent.css"

import Navbar from "../Navbar/Navbar.jsx"

import Dashboard from "../Dashboard/Dashboard.jsx"

import Today from "../Today/Today.jsx"

// import Five_day from "../Five_day/Five_day.jsx"



const Parent = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const weather_call = async (city) => {

            const api_key = "904e60ed8ac1bc1990cdda74d9a3319b";
            const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        

            try {

                const response = await fetch(`${api_url}&q=${city}&appid=${api_key}`);
                
                if (!response.ok){

                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setWeatherData(data);

                console.log(data);

            } 
            
            
            catch (error) {
                console.error('Error fetching the weather data:', error);
            }

    }

    const forecast_call = async (city) => {

        const api_key = "904e60ed8ac1bc1990cdda74d9a3319b";
        const api_url = "api.openweathermap.org/data/2.5/forecast?units=metric";
    

        try {

            const response = await fetch(`${api_url}&q=${city}&appid=${api_key}`);
            
            if (!response.ok){

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            setWeatherData(data);

            console.log(data);

        } 
        
        
        catch (error) {
            console.error('Error fetching the weather data:', error);
        }

}


    useEffect(() => {
        if (city) {
            weather_call(city);
        }
    }, [city]);

   

    


    return(

        <div className="parent">
            <Navbar setCity={setCity} weather_call={weather_call} />
            <Dashboard weatherData={weatherData} />
            <Today weatherData={weatherData}/>
            {/* <Five_day forecast_call={forecast_call}/> */}
        </div>
    )

}

export default Parent