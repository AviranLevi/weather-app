import * as actionType from '../actions/types';

const initialState = {
  cityName: 'Tel Aviv',
  locationKey: '',
  currentTemp: {
    celsius: 34,
    fahrenheit: 100,
  },
  weatherStatus: 'Sunny',
  currentDate: '21 September 2020',
  cityBackground: 'https://cache.marriott.com/marriottassets/marriott/TLVSI/tlvsi-exterior-4080-hor-feat.jpg',
  favorites: [],
  isDayTime: true,

  searchValue: '',
  //features
  darkMode: false,
  isLoading: false,
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
        currentDate: action.payload.currentDate,
        currentTemp: action.payload.currentTemp,
        weatherStatus: action.payload.weatherStatus,
        isDayTime: action.payload.isDayTime,
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
