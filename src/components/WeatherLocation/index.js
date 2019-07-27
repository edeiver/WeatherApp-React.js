import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import PropTypes from 'prop-types';

const WeatherLocation =  () =>(
    <div>
        <h4>WheatherLoaction</h4>
        <Location city={'Barranquilla'}/>
        <WeatherData/>
    </div>
);

Location.propTypes={
    city: PropTypes.string.isRequired,
};
export default WeatherLocation;