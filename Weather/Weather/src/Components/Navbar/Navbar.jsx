

import React, {useState, useEffect} from 'react';

import "./Navbar.css"

const Navbar = ({setCity, weather_call, forecast_call}) => {

    const [input, setInput] = useState('');

    const [hasError, setHasError] = useState(false);

    const [error, setError] = useState('');

    const search = () => {

        
            if (input.trim() == "") {

                setHasError(true);
                setError("Please enter a city name!!!");
                setTimeout(() => {
                    setHasError(false);
                    setError('');
                }, 5000);
                return;

            }

            else{
                
                setHasError(false);
                setError('');
                setCity(input);
                weather_call(input);  // Pass the actual input value
                forecast_call(input); 

            }
            
           
    }



    return(

        <div className='navbar'>

            <div className="Search-div">

                <input type='search' className='search' placeholder='Enter a city name' value={input} onChange={(e) => setInput(e.target.value)}></input>

                <i className="fa-solid fa-magnifying-glass" onClick={search}></i>

            </div>


           {hasError && (

                <div className='Error-div' style={{display: "block"}}>
                <p className='error-text'>{error}</p>
                </div>


           )}
           

           

        </div>

    )
}

export default Navbar;