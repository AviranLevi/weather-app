import React from 'react';
import Title from '../title';
import weatherIcons from '../../config/weatherIcons';
import { featureIcons } from '../../constant/icons';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../stores/actions';
import { removeFromFavorites } from '../../stores/actions/weather';

const ForecastCard = ({
  cityName = '',
  locationKey = '',
  date = '',
  status = '',
  celsius,
  fahrenheit,
  favorite = false,
  convertTempUnit = false, //default = celsius
  icon = 1,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='forecast-card center-items from-bottom'>
      <div className='city-info'>
        <div className='city-name-date'>
          <div
            className={`favorite-icon ${favorite ? 'fav-clicked' : ''}`}
            onClick={() =>
              !favorite ? dispatch(addToFavorite(cityName, locationKey)) : dispatch(removeFromFavorites(locationKey))
            }
          >
            {favorite ? featureIcons.favoriteClicked : featureIcons.favoriteUnClicked}
          </div>
          <Title className='city-name' text={cityName} />
          <Title className='date' text={date} />
        </div>
        <div className='status'>
          <Title className='weather-status' text={status} />
          <img className='status-icon' src={weatherIcons[icon]} alt={status} />
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
};

export default ForecastCard;
