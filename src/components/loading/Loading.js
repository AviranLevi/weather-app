import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  return (
    <Backdrop className='loading' open={open} onClick={handleClose}>
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Loading;
