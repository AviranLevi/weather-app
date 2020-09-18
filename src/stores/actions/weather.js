import axios from 'axios';
import moment from 'moment';
import * as actionType from './types';
import { accuWeather } from '../../config';
import { isLoading } from './features';
import { getLocalStorage } from '../../utils/general';

const { apikey } = accuWeather;

const api = axios.create({
  baseURL: accuWeather.url,
});

export const searchCity = (value) => (dispatch) => {
  dispatch({ type: actionType.SEARCH_LOCATION, payload: value });
};

export const setCurrentLocationWeather = (lat, lon) => (dispatch) => {
  const params = { q: `${lat},${lon}`, apikey };
  const savedCities = getLocalStorage();
  api
    .get('/locations/v1/geoposition/search', { params })
    .then((res) => {
      const { data } = res;
      const { Key, EnglishName } = data[0];
      dispatch({ type: actionType.SET_LOCATION, payload: { key: Key, cityName: EnglishName } });
      dispatch(getTodayWeather(Key));

      const alreadyInFavorite = savedCities.filter((city) => city.locationKey === Key);
      if (alreadyInFavorite.length) {
        dispatch({ type: actionType.FAVORITE_CITY, payload: true });
      }
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

export const addToFavorite = (cityName, locationKey) => (dispatch) => {
  const savedCities = getLocalStorage();

  const updatedCities = [...savedCities, { cityName, locationKey, favorite: true }];

  localStorage.setItem('favorites', JSON.stringify(updatedCities));

  dispatch({ type: actionType.FAVORITE_CITY, payload: true });
  dispatch({ type: actionType.ADD_TO_FAVORITE, payload: updatedCities });
};

export const getFavorites = () => (dispatch) => {
  const favorites = getLocalStorage();
  dispatch({ type: actionType.GET_FAVORITES, payload: favorites });
};

export const removeFromFavorites = (locationKey) => (dispatch) => {
  const savedCities = getLocalStorage();
  const updatedCities = savedCities.filter((city) => city.locationKey !== locationKey);
  localStorage.setItem('favorites', JSON.stringify(updatedCities));
  dispatch({ type: actionType.REMOVE_FROM_FAVORITE, payload: updatedCities });
};
