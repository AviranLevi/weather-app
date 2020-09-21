import React from 'react';
import Grow from '@material-ui/core/Grow';
import weatherIcons from '../../config/weatherIcons';
import Title from '../title';

const FavoriteCard = ({
  title = '',
  status = 'Sunny',
  icon = 1,
  className = '',
  style = {},
  celsius = 0,
  fahrenheit = 0,
  convertTempUnit = false,
  index = 0,
}) => {
  return (
    <Grow in={true} timeout={index * 1000}>
      <div className={`favorite-card center-items ${className}`} style={style}>
        <Title className='favorite-card-title bold-text' text={title} />
        {convertTempUnit ? (
          <div className='current-temp'>
            {fahrenheit} <span>&#8457;</span>
          </div>
        ) : (
          <div className='favorites-current-temp'>
            {celsius}
            <span>&#8451;</span>
          </div>
        )}
        <img className='favorites-status-icon' src={weatherIcons[icon]} alt={status} />
        <Title className='favorites-weather-status' text={status} />
      </div>
    </Grow>
  );
};

export default FavoriteCard;
