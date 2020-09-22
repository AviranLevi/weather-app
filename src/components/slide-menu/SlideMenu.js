import React from 'react';
import { Link } from 'react-router-dom';
import { featureIcons } from '../../constant/icons';
import Title from '../title';
import ToggleSwitch from '../toggle-switch';

const SlideMenu = ({ open, onOpen, onClose, darkMode = false, toggleDarkMode, units, convertTempUnits = false }) => (
  <div className='slide-menu'>
    <div className='burger' onClick={onOpen}>
      {featureIcons.burger}
    </div>

    {open ? (
      <div className='slide'>
        <div className='close-btn' onClick={onClose}>
          {featureIcons.close}
        </div>

        <div className='slide-menu-wrapper'>
          <Link to='/'>Home</Link>
          <Link to='/my-besties'>Favorites</Link>
          <div className='dark-mode-switch center-items'>
            <Title text='Dark Theme' />
            <ToggleSwitch htmlFor='dark-mode-switch' onChange={toggleDarkMode} checked={darkMode} />
          </div>

          <div className='switch-units center-items'>
            <Title text={convertTempUnits ? 'Fahrenheit' : 'Celsius'} />
            <ToggleSwitch htmlFor='units-switch' onChange={units} checked={convertTempUnits} />
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default SlideMenu;
