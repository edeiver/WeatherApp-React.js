import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) =>{
   return ( 
   <div>
        <span>{`${props.humidity} % - `}</span>
        <span>{props.wind}</span>
    </div>
    )
};
   
WeatherExtraInfo.propTypes={
humidity: PropTypes.number.isRequired,
wind: PropTypes.string.isRequired,
};
export default WeatherExtraInfo;