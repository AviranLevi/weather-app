import React from 'react';
import SearchInput from '../search-input';
import ToggleSwitch from '../toggle-switch';
import Title from '../title';
import { useSelector, useDispatch } from 'react-redux';
import { searchCity, enableDarkMode } from '../../stores/actions';
import Menu from '../menu';

const Header = () => {
  const state = useSelector((state) => state);
  const { searchValue, darkMode, favoriteCities } = state;
  const dispatch = useDispatch();
  return (
    <div className='header center-items'>
      <div className='routes center-items'>
        <Menu items={['Favorites:']} favorites={favoriteCities} />
      </div>

      <SearchInput value={searchValue} onChange={(e) => dispatch(searchCity(e.target.value))} />

      <div className='dark-mode-switch center-items'>
        <Title text='Dark Theme' />
        <ToggleSwitch onChange={() => dispatch(enableDarkMode(!darkMode))} checked={darkMode} />
      </div>
    </div>
  );
};

export default Header;
