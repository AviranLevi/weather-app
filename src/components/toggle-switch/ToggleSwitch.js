import React from 'react';

const ToggleSwitch = ({ onChange, checked = false }) => (
  <div className='switch'>
    <input onChange={onChange} type='checkbox' id='switch' checked={checked} />
    <label htmlFor='switch'></label>
  </div>
);

export default ToggleSwitch;
