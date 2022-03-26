import React, { FC, ReactElement } from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppHeader from './components/AppHeader';
import AppContent from './screens/AppContent';

const useStyles = makeStyles({
  appContainer: {
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
    <>
      <Container maxWidth={'xl'} className={classes.appContainer}>
        <Stack direction={'column'} spacing={2} className={classes.appWrapper}>
          <AppHeader />

          <AppContent />
        </Stack>
      </Container>

      <div id={'modal-portal-wrapper'} className={classes.modalPortalWrapper} />
    </>
  );
};

export default App;
