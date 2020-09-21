import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForecastCard from '../../components/forecast-card';
import DailyForecast from '../../components/daily-forecast';
import Loading from '../../components/loading';
import { getFavorites, getTodayWeather, setCurrentLocationWeather } from '../../stores/actions';

const Main = ({ match }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { todayWeather, loading, dailyForecast, favoriteCities } = state;
  const { id } = match.params;

  useEffect(() => {
    dispatch(getFavorites());
    if (id) {
      const city = favoriteCities.filter((city) => city.id === id);
      dispatch(getTodayWeather(city.locationKey, city.cityName));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { coords } = position;
          const { latitude, longitude } = coords;
          dispatch(setCurrentLocationWeather(latitude, longitude));
        },
        (err) => console.log(err.message)
      );
    }
  }, [id, favoriteCities, dispatch]);

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
