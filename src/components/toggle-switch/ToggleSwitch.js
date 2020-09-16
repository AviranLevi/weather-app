import React from 'react';
import { featureIcons } from '../../constant/icons';

const ToggleSwitch = ({ onChange, checked = false }) => (
  <div className='switch'>
    <input onChange={onChange} type='checkbox' id='switch' checked={checked} />
    <label for='switch'></label>
  </div>
);

export default ToggleSwitch;
