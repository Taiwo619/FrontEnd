

import  "./Today.css"

import React, {useState, useEffect} from "react"

const Today = ({weatherData}) => {

    useEffect(() => {

        if (weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main && weatherData.main.humidity && weatherData.main.pressure && weatherData.main.feels_like && weatherData.sys.sunrise && weatherData.sys.sunset) {
            
            setHumidity(weatherData.main.humidity + "%")
            setPressure(weatherData.main.pressure + " hPa")
            setFeelsLike( Math.round(weatherData.main.feels_like) + "°")
            setVisibility(weatherData.visibility/1000 + "km")

            const options = { hour: '2-digit', minute: '2-digit', hour12: false };
            const sunriseTime = new Date(weatherData.sys.sunrise * 1000)
            setSunRise(sunriseTime.toLocaleTimeString([], options));

            const sunsetTime = new Date(weatherData.sys.sunset * 1000)
            setSunSet(sunsetTime.toLocaleTimeString([], options));

        }
    }, [weatherData]);

    const [sunrise, setSunRise] = useState("-")

    const [sunset, setSunSet] = useState("-")

    const [humidity, setHumidity] = useState("-")

    const [pressure, setPressure] = useState("-")

    const [feelsLike, setFeelsLike] = useState("-")

    const [visibility, setVisibility] = useState("-")

    return(

        <div className="Today">
            
            <div className="Param-div">
                <p className="parameter">Sunrise</p>
                <p className="parameter-figure">{sunrise}</p>
            </div>

            <div className="Param-div">
                <p className="parameter">Sunset</p>
                <p className="parameter-figure">{sunset}</p>
            </div>

            <div className="Param-div">
                <p className="parameter">Humidity</p>
                <p className="parameter-figure">{humidity}</p>
            </div>

            <div className="Param-div">
                <p className="parameter">Pressure</p>
                <p className="parameter-figure">{pressure}</p>
            </div>

            <div className="Param-div">
                <p className="parameter">feelsLike</p>
                <p className="parameter-figure">{feelsLike}</p>
            </div>

            <div className="Param-div">
                <p className="parameter">Visibility</p>
                <p className="parameter-figure">{visibility}</p>
            </div>

        </div>
    )

}

export default Today