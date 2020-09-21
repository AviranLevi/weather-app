import React from 'react';
import SearchInput from '../search-input';
import ToggleSwitch from '../toggle-switch';
import Title from '../title';
import { useSelector, useDispatch } from 'react-redux';
import { enableDarkMode } from '../../stores/actions';
import { Link } from 'react-router-dom';

const Header = () => {
  const state = useSelector((state) => state);
  const { searchResults, darkMode } = state;
  const dispatch = useDispatch();
  return (
    <div className='header center-items'>
      <div className='routes center-items'>
        <Link to='/'>Home</Link>
        <Link to='/my-besties'>Favorites</Link>
      </div>

      <SearchInput searchResults={searchResults} />

      <div className='dark-mode-switch center-items'>
        <Title text='Dark Theme' />
        <ToggleSwitch onChange={() => dispatch(enableDarkMode(!darkMode))} checked={darkMode} />
      </div>
    </div>
  );
};

export default Header;
