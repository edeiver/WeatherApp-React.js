import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { WINDY} from './../../../constants/weathers'
import './style.css';

const WeatherData = () =>(
    <div className="card-text">
         <WeatherTemperature temperature={35} weatherState={WINDY}/>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
    </div>
);

export  default WeatherData;