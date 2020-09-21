import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Alert = ({ message = '', open = false, onClose = false }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={handleClose} severity='error'>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Loading;
