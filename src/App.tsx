import React, { FC, ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';
import Router from './screens/Router';

const useStyles = makeStyles({
  modalPortalWrapper: {
    position: 'relative',
  },
});

const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Router/>

      <div id={'modal-portal-wrapper'} className={classes.modalPortalWrapper} />
    </BrowserRouter>
  );
};

export default App;
