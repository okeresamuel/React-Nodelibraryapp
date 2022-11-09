import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

 function SimpleBackdrop() {
  const [open, ] = React.useState(true);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default SimpleBackdrop