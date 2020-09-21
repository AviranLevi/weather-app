import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = ({ className = '' }) => (
  <div className={`sweet-spinner ${className}`}>
    <CircularProgress color='inherit' />
  </div>
);

export default Spinner;
