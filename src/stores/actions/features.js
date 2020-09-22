import * as actionType from './types';
import axios from 'axios';
import { accuWeather } from '../../config';

const { apikey } = accuWeather;

const api = axios.create({
  baseURL: accuWeather.url,
});

export const enableDarkMode = (bool) => ({ type: actionType.DARK_MODE, payload: bool });

export const toggleLoading = (bool) => ({ type: actionType.IS_LOADING, payload: bool });

export const switchUnits = (bool) => ({ type: actionType.CONVERT_TEMP_UNITS, payload: bool });

export const redirectToMain = (bool) => ({ type: actionType.REDIRECT, payload: bool });

export const toggleSlideMenu = (bool) => ({ type: actionType.SLIDE_MENU, payload: bool });

export const searchCity = (value) => (dispatch) => {
  const params = { q: value, apikey };
  api
    .get('/locations/v1/cities/autocomplete', { params })
    .then((res) => {
      const { data } = res;
      dispatch({ type: actionType.SEARCH_RESULTS, payload: data });
    })
    .catch((err) => console.log(err));
};
