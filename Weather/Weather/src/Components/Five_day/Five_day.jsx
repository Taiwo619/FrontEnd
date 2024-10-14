


import  "./Five_day.css"

import React, {useState, useEffect} from "react"

const Five_day = ({forecast_call}) => {

    const [day_1, setday_1] = useState("-")

    const [day_2, setday_2] = useState("-")

    const [day_3, setday_3] = useState("-")

    const [day_4, setday_4] = useState("-")

    const [day_5, setday_5] = useState("-")

    const [day_1_condition, setday_1_condition] = useState("-")

    const [day_2_condition, setday_2_condition] = useState("-")

    const [day_3_condition, setday_3_condition] = useState("-")

    const [day_4_condition, setday_4_condition] = useState("-")

    const [day_5_condition, setday_5_condition] = useState("-")

    

    return(

        <div className="Five_day">
            
            <div className="Forecast-div">
                <p className="parameter">Today</p>
                <p className="parameter-figure">-</p>
            </div>

            <div className="Forecast-div">
                <p className="parameter">{day_1}-</p>
                <p className="parameter-figure">{day_1_condition}</p>
            </div>

            <div className="Forecast-div">
                <p className="parameter">{day_2}</p>
                <p className="parameter-figure">{day_2_condition}</p>
            </div>

            <div className="Forecast-div">
                <p className="parameter">{day_3}</p>
                <p className="parameter-figure">{day_3_condition}</p>
            </div>

            <div className="Forecast-div">
                <p className="parameter">{day_4}</p>
                <p className="parameter-figure">{day_4_condition}</p>
            </div>

            <div className="Forecast-div">
                <p className="parameter">{day_5}</p>
                <p className="parameter-figure">{day_5_condition}</p>
            </div>

        </div>
    )

}

export default Five_day