import React, { useEffect, useState } from 'react';
import axios from 'axios';
import weatherIcons from '../../config/weatherIcons';
import { accuWeather } from '../../config';
import { isEmpty } from '../../utils/general';

import Grow from '@material-ui/core/Grow';
import Title from '../title';
import Spinner from '../spinner';

const { apikey, url } = accuWeather;

const api = axios.create({
  baseURL: url,
});

const FavoriteCard = ({ title = '', className = '', style = {}, convertTempUnit = false, index = 0, locationKey }) => {
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    const params = { apikey };
    api
      .get(`/currentconditions/v1/${locationKey}`, { params })
      .then((res) => {
        const { data } = res;
        setCityWeather(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!isEmpty(cityWeather)) {
    return (
      <Grow in={true} timeout={index * 1000}>
        <div className={`favorite-card center-items ${className}`} style={style}>
          <Title className='favorite-card-title bold-text' text={title} />
          {convertTempUnit ? (
            <div className='current-temp'>
              {cityWeather.Temperature.Imperial.Value} <span>&#8457;</span>
            </div>
          ) : (
            <div className='favorites-current-temp'>
              {cityWeather.Temperature.Metric.Value}
              <span>&#8451;</span>
            </div>
          )}
          <img
            className='favorites-status-icon'
            src={weatherIcons[cityWeather.WeatherIcon]}
            alt={cityWeather.WeatherText}
          />
          <Title className='favorites-weather-status' text={cityWeather.WeatherText} />
        </div>
      </Grow>
    );
  }
  return <Spinner className='favorite-card center-items' />;
};

export default FavoriteCard;
