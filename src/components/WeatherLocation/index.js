import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import PropTypes from 'prop-types';

const WeatherLocation =  () =>(
<div className="row">
    <div className="col-lg-12 col-sm-12 col-md-12">
        <div className="card">
            <div className="card-header">
              <h4>WheatherLoaction</h4> 
            <Location city={'Barranquilla'}/>  
            </div>
            <div className="card-body">
                <WeatherData/> 
            </div>
        </div>
    </div>
</div>
);  

Location.propTypes={
    city: PropTypes.string.isRequired,
};
export default WeatherLocation;