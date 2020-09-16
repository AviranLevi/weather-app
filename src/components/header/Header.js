import React from 'react';
import SearchBar from '../search-bar';
import ToggleSwitch from '../toggle-switch';
import Title from '../title';
import { useSelector, useDispatch } from 'react-redux';
import { searchCity, enableDarkMode } from '../../stores/actions';

const Header = () => {
  const state = useSelector((state) => state);
  const { searchValue, darkMode } = state;
  const dispatch = useDispatch();
  return (
    <div className='header center-items'>
      <div className='routes center-items'>
        <h1>Home</h1>
        <h1>My Cities</h1>
      </div>

      <SearchBar value={searchValue} onChange={(e) => dispatch(searchCity(e.target.value))} />

      <div className='dark-mode-switch center-items'>
        <Title text='Dark Theme' />
        <ToggleSwitch onChange={() => dispatch(enableDarkMode(!darkMode))} checked={darkMode} />
      </div>
    </div>
  );
};

export default Header;
