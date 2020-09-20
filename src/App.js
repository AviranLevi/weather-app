import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLocationWeather, getFavorites } from './stores/actions';
import Main from './pages/main/Main';
import Header from './components/header';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { darkMode } = state;

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

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
