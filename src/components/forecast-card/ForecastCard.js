import React from 'react';
import Title from '../title';
import WeatherIcons from '../../config/weatherIcons';
import weatherIcons from '../../config/weatherIcons';

const ForecastCard = ({
  cityName = '',
  date = '',
  status = '',
  celsius,
  fahrenheit,
  convertTempUnit = false, //default = celsius
  icon = 1,
}) => (
  <div className='forecast-card center-items'>
    <div className='city-info'>
      <div className='city-name-date'>
        <Title className='city-name' text={cityName} />
        <Title className='date' text={date} />
      </div>
      <div className='status'>
        <img className='status-icon' src={weatherIcons[icon]} alt={status} />
        <Title className='weather-status' text={status} />
      </div>
    </div>

    {convertTempUnit ? (
      <div className='current-temp'>
        {fahrenheit} <span>&#8457;</span>
      </div>
    ) : (
      <div className='current-temp'>
        {celsius}
        <span>&#8451;</span>
      </div>
    )}
    <div></div>
  </div>
);

export default ForecastCard;
