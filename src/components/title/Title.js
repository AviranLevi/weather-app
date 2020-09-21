import React from 'react';

const Title = ({ text = '', className = '', style = {} }) => (
  <h1 className={`title bold-text ${className}`} style={style}>
    {text}
  </h1>
);

export default Title;
