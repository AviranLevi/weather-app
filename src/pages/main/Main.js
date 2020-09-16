import React from 'react';
import { useSelector } from 'react-redux';
import ForecastCard from '../../components/forecast-card';

const Main = () => {
  const state = useSelector((state) => state);
  return (
    <div className='main center-items'>
      <ForecastCard
        date={state.currentDate}
        backgroundImageSrc={state.cityBackground}
        status={state.weatherStatus}
        cityName={state.cityName}
        convertTempUnit={state.convertTempUnits}
        celsius={state.currentTemp.celsius}
        fahrenheit={state.currentTemp.fahrenheit}
      />
    </div>
  );
};

export default Main;
