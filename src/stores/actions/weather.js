import * as actionType from './types';
import axios from 'axios';
import { accuWeather } from '../../config';
import moment from 'moment';

const { apikey } = accuWeather;

const api = axios.create({
  baseURL: accuWeather.url,
});

export const searchCity = (value) => (dispatch) => {
  dispatch({ type: actionType.SEARCH_LOCATION, payload: value });
};

export const enableDarkMode = (bool) => ({ type: actionType.DARK_MODE, payload: bool });

export const setCurrentLocationWeather = (lat, lon) => (dispatch) => {
  const params = { q: `${lat},${lon}`, apikey };

  api
    .get('/locations/v1/geoposition/search', { params })
    .then((res) => {
      const { data } = res;
      const { Key, EnglishName } = data[0];
      dispatch({ type: actionType.SET_LOCATION, payload: { key: Key, cityName: EnglishName } });
      dispatch(getWeatherByKey(Key));
    })
    .catch((err) => console.log(err));
};

export const getWeatherByKey = (key) => (dispatch) => {
  const params = { apikey, getphotos: true };
  api
    .get(`/currentconditions/v1/${key}`, { params })
    .then((res) => {
      const { data } = res;
      const { IsDayTime, Temperature, WeatherText, WeatherIcon, LocalObservationDateTime } = data[0];
      const { Imperial, Metric } = Temperature;

      const currentDate = moment(LocalObservationDateTime).format('LL');
      const celsius = Metric.value;
      const fahrenheit = Imperial.value;

      dispatch({
        type: actionType.CURRENT_WEATHER,
        payload: {
          currentDate,
          isDayTime: IsDayTime,
          weatherStatus: WeatherText,
          currentTemp: { celsius, fahrenheit },
        },
      });
    })
    .catch((err) => console.log(err));
};

export const getDailyForecasts = (key) => (dispatch) => {};

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });
