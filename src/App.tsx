import React, {FC, ReactElement} from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppHeader from './components/AppHeader';
import AppContent from './screens/AppContent';

const useStyles = makeStyles({
  container: {
    height: '100%',
  },
});

const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container maxWidth={'xl'} className={classes.container}>
      <Stack direction={'column'} spacing={2}>
        <AppHeader />

        <AppContent />
      </Stack>
    </Container>
  );
};

export default App;
