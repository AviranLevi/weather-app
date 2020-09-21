import * as actionType from '../actions/types';

const initialState = {
  todayWeather: {},
  dailyForecast: [],
  locationKey: '',
  cityName: '',
  favorite: false,
  //search
  searchValue: '',
  searchResults: [],
  //features
  darkMode: false,
  loading: true,
  convertTempUnits: false, //default = celsius
  //errors
  errors: {
    apiError: false,
    searchError: false,
    dailyForecastError: false,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_LOCATION:
      return {
        ...state,
        cityName: action.payload.cityName,
        locationKey: action.payload.key,
      };

    case actionType.CURRENT_WEATHER:
      return {
        ...state,
        todayWeather: action.payload.todayWeather,
        cityName: action.payload.cityName,
      };

    case actionType.FIVE_DAYS_FORECASTS:
      return {
        ...state,
        dailyForecast: action.payload,
      };

    case actionType.SEARCH_LOCATION:
      return {
        ...state,
        searchValue: action.payload,
      };

    case actionType.SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

    case actionType.ADD_TO_FAVORITE:
      return {
        ...state,
        favoriteCities: action.payload,
      };

    case actionType.GET_FAVORITES:
      return {
        ...state,
        favoriteCities: action.payload,
      };

    case actionType.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteCities: action.payload,
        favorite: false,
      };

    case actionType.FAVORITE_CITY:
      return {
        ...state,
        favorite: action.payload,
      };

    case actionType.DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };

    case actionType.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case actionType.CONVERT_TEMP_UNITS:
      return {
        ...state,
        convertTempUnits: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
