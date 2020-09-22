import React from 'react';

const ToggleSwitch = ({ onChange, checked = false, htmlFor = '' }) => (
  <div className='switch'>
    <input onChange={onChange} type='checkbox' id={htmlFor} checked={checked} />
    <label htmlFor={htmlFor}></label>
  </div>
);

export default ToggleSwitch;
