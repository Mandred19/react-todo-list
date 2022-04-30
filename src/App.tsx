import React, {FC, ReactElement} from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppHeader from './components/AppHeader';
import { BrowserRouter } from 'react-router-dom';
import Router from './screens/Router';

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: '#eee',
    height: '100%',
  },
  container: {
    height: '100%',
  },
  appWrapper: {
    overflow: 'hidden',
    height: '100%',
  },
  modalPortalWrapper: {
    position: 'relative',
  },
});

const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Stack direction={'column'} className={classes.wrapper}>
        <Container maxWidth={'xl'} className={classes.container}>
          <Stack direction={'column'} className={classes.appWrapper}>
            <AppHeader />

            <Router />
          </Stack>
        </Container>

        <div id={'modal-portal-wrapper'} className={classes.modalPortalWrapper} />
      </Stack>
    </BrowserRouter>
  );
};

export default App;
