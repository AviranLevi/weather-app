import React from 'react';
import { useSelector } from 'react-redux';
import ForecastCard from '../../components/forecast-card';
import { converter } from '../../utils/general';

import DailyForecast from '../../components/daily-forecast';
import Loading from '../../components/loading/Loading';

const Main = () => {
  const state = useSelector((state) => state);
  const { todayWeather, isLoading, dailyForecast } = state;
  if (isLoading) return <Loading />;

  return (
    <div className='main center-items'>
      <ForecastCard
        date={todayWeather.currentDate}
        backgroundImageSrc={state.cityBackground}
        status={todayWeather.WeatherText}
        cityName={state.cityName}
        convertTempUnit={state.convertTempUnits}
        celsius={`${todayWeather.Temperature.Metric.Value}`}
        fahrenheit={`${todayWeather.Temperature.Imperial.Value}`}
        icon={todayWeather.WeatherIcon}
      />

      <div className='daily-forecasts center-items'>
        {dailyForecast.map((forecast, index) => (
          <DailyForecast forecast={forecast} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
