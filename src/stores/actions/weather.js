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
      dispatch(getTodayWeather(Key));
    })
    .catch((err) => console.log(err));
};

export const getTodayWeather = (key) => (dispatch) => {
  const params = { apikey, getphotos: true };
  api
    .get(`/currentconditions/v1/${key}`, { params })
    .then((res) => {
      const { data } = res;
      const { LocalObservationDateTime } = data[0];
      const currentDate = moment(LocalObservationDateTime).format('LL');
      const todayWeather = { ...data[0], currentDate };

      dispatch({
        type: actionType.CURRENT_WEATHER,
        payload: todayWeather,
      });
      dispatch(getDailyForecasts(key));
      dispatch(isLoading(false));
    })
    .catch((err) => console.log(err));
};

export const getDailyForecasts = (key) => (dispatch) => {
  const params = { apikey, metric: true };
  api
    .get(`forecasts/v1/daily/5day/${key}`, { params })
    .then((res) => {
      const { data } = res;
      const { DailyForecasts } = data;
      dispatch({ type: actionType.FIVE_DAYS_FORECASTS, payload: DailyForecasts });
    })
    .catch((err) => console.log(err));
};

export const isLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });
