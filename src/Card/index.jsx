import React from 'react';

import '../App.css';


export const Card = () => {
  return (
    <div className="Card">
        <div className='MainInfo'>

            <img className='Icon' src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />

            <div className="Title">Moscow</div>
            <div className="Description">Cloudy</div>
            <div className="Temperature">+12</div>
        </div>
        <div className="Information">
            <div>Humidity: 10</div>
            <div>Feels like: 10</div>
        </div>
    </div>
  );
}
