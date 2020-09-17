import * as actionType from '../actions/types';

const initialState = {
  todayWeather: {},
  dailyForecast: [],
  locationKey: '',
  //features
  darkMode: false,
  isLoading: true,
  convertTempUnits: false, //default = celsius
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
        todayWeather: action.payload,
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

    case actionType.DARK_MODE:
      return { ...state, darkMode: action.payload };

    case actionType.IS_LOADING:
      return { ...state, isLoading: action.payload };

    case actionType.CONVERT_TEMP_UNITS:
      return { ...state, convertTempUnits: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
