import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForecastCard from '../../components/forecast-card';
import DailyForecast from '../../components/daily-forecast';
import Loading from '../../components/loading';
import { getFavorites, setCurrentLocationWeather } from '../../stores/actions';

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { todayWeather, isLoading, dailyForecast } = state;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        dispatch(setCurrentLocationWeather(latitude, longitude));
      },
      (err) => console.log(err.message)
    );

    dispatch(getFavorites());
  }, [dispatch]);

  if (isLoading) return <Loading open={isLoading} />;

  return (
    <div className='main center-items'>
      <ForecastCard
        date={todayWeather.currentDate}
        backgroundImageSrc={state.cityBackground}
        status={todayWeather.WeatherText}
        cityName={state.cityName}
        favorite={state.favorite}
        convertTempUnit={state.convertTempUnits}
        celsius={`${todayWeather.Temperature.Metric.Value}`}
        fahrenheit={`${todayWeather.Temperature.Imperial.Value}`}
        icon={todayWeather.WeatherIcon}
        locationKey={state.locationKey}
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
