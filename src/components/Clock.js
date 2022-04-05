import axios from 'axios'
import {useState, useEffect} from 'react'

const Clock = (props) => {

    const [weather, setWeather] = useState(null)

    const date = new Date();
        const timeNow = date.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            });

    // useEffect(() => {
    //     const url = "http://api.weatherapi.com/v1/current.json";
    //     const key = 'f7320f78fac946c19e6200312222103'
    //         axios
    //           .get(`${url}?key=${key}&q=68008&aqi=no`)
    //           .then(response => {
    //             setWeather(response.data);
    //           });
    //       }, [])

    const current = weather && weather.current
    const location = weather && weather.location
    const article = weather && current.condition.text[0]
                                      .match(/[aeiou]/gi) ? "an" : "a"

return (
         <div className="clock">
            <h1 className="clock-text">{timeNow}</h1>
            {/* <span 
                className="weather-display">
                    <i>{article} {current.condition.text} {current.temp_f}&deg;F in {location.name}, {location.region}</i></span> */}
             </div> 
)
}

export default Clock