import React from 'react';
import SearchInput from '../search-input';
import ToggleSwitch from '../toggle-switch';
import Title from '../title';
import { useSelector, useDispatch } from 'react-redux';
import { enableDarkMode, switchUnits, toggleSlideMenu } from '../../stores/actions';
import { Link } from 'react-router-dom';
import SlideMenu from '../slide-menu';

const Header = () => {
  const state = useSelector((state) => state);
  const { searchResults, darkMode, convertTempUnits, slideMenu } = state;
  const dispatch = useDispatch();

  return (
    <div className='header center-items'>
      <div className='routes center-items'>
        <div className='routes-wrapper center-items'>
          <Link to='/'>Home</Link>
          <Link to='/my-besties'>Favorites</Link>
        </div>

        <SlideMenu
          onOpen={() => dispatch(toggleSlideMenu(true))}
          onClose={() => dispatch(toggleSlideMenu(false))}
          darkMode={darkMode}
          units={() => dispatch(switchUnits(!convertTempUnits))}
          convertTempUnits={convertTempUnits}
          toggleDarkMode={() => dispatch(enableDarkMode(!darkMode))}
          open={slideMenu}
        />
      </div>

      <SearchInput searchResults={searchResults} />

      <div className='dark-mode-switch center-items'>
        <Title text='Dark Theme' />
        <ToggleSwitch
          htmlFor='dark-mode-switch'
          onChange={() => dispatch(enableDarkMode(!darkMode))}
          checked={darkMode}
        />
      </div>

      <div className='switch-units center-items'>
        <Title text={convertTempUnits ? 'Fahrenheit' : 'Celsius'} />
        <ToggleSwitch
          htmlFor='units-switch'
          onChange={() => dispatch(switchUnits(!convertTempUnits))}
          checked={convertTempUnits}
        />
      </div>
    </div>
  );
};

export default Header;
