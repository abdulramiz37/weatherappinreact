import React, { useState } from 'react'
import { Contxt } from './Context'

function Body() {
    const [check, setcheck] = useState(false)
    let value = Contxt()

    let crr = value.current
    console.log(crr)

    let day = value.data
    console.log(day)

    let sunrise = new Date(crr?.sunrise * 1000).toLocaleString().slice(-11, -6) + 'AM'
    console.log(sunrise)

    let sunset = new Date(crr?.sunset * 1000).toLocaleString().slice(-11, -6) + 'PM'
    console.log(sunset)







    // const weekDay = new Date(val.dt * 1000).toLocaleString("en-us", {
    //     weekday: "long"
    // });

    // console.log(weekDay)
    return (
        <div class="card text-center" style={{ margin: '8rem' }}>
           
            <div class="card-body">
                <h5 class="card-title">Bengaluru</h5>
                <p class="card-text">{crr?.weather[0].description}</p>
            </div>
         
                <li class="list-group-item"><b>Temprature :</b> {crr?.temp}°C</li>
                <li class="list-group-item"><b>Highest Today :</b>{day[0]?.temp.max}°C</li>
                <li class="list-group-item"><b>Lowest Today :</b>{day[0]?.temp.min}°C</li>
        
                <li class="list-group-item"><b>Wind Speed :</b> {crr?.wind_speed}</li>
                <li class="list-group-item"><b>Humidity :</b> {crr?.humidity}</li>
                <li class="list-group-item"><b>Pressure :</b> {crr?.pressure}</li>
                <li class="list-group-item"><b>Sunrise :</b> {sunrise}</li>
                <li class="list-group-item"><b>Sunset :</b> {sunset}</li>


          
  
      
            </div>





        
    )
}

export default Body
