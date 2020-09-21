import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForecastCard from '../../components/forecast-card';
import DailyForecast from '../../components/daily-forecast';
import Loading from '../../components/loading';
import { getTodayWeather, setCurrentLocationWeather } from '../../stores/actions';
import { useLocation, useParams } from 'react-router-dom';
import { getLocalStorage } from '../../utils/general';

const Main = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const { todayWeather, loading, dailyForecast } = state;

  useEffect(() => {
    setFavoriteCities(getLocalStorage());

    if (id) {
      const city = favoriteCities.filter((city) => city.id === id);
      dispatch(getTodayWeather(city.locationKey, city.cityName));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCurrentLocationWeather(latitude, longitude));
        },
        (err) => console.log(err),
        { timeout: 5000, enableHighAccuracy: true }
      );
    }
  }, [favoriteCities.length]);

  if (loading) return <Loading open={loading} />;

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
