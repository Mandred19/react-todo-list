import React, {FC, ReactElement} from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import AppHeader from './components/AppHeader';
import { BrowserRouter } from 'react-router-dom';
// import ProtectedRouter from './screens/Router/ProtectedRouter';
import PublicRouter from './screens/Router/PublicRouter';

const useStyles = makeStyles({
  appWrapper: {
    backgroundColor: '#eee',
    overflow: 'hidden',
    height: '100%',
  },
  container: {
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
      {/*<Stack direction={'column'} className={classes.appWrapper}>*/}
      {/*  <AppHeader />*/}

      {/*  <Container maxWidth={'xl'} className={classes.container}>*/}
      {/*    <ProtectedRouter />*/}
      {/*  </Container>*/}
      {/*</Stack>*/}

      <Stack direction={'column'} className={classes.appWrapper}>
        <Container maxWidth={'xl'} className={classes.container}>
          <PublicRouter />
        </Container>
      </Stack>

      <div id={'modal-portal-wrapper'} className={classes.modalPortalWrapper} />
    </BrowserRouter>
  );
};

export default App;
