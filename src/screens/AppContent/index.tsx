import React, {FC, ReactElement} from 'react';
import { Stack } from '@mui/material';
import AppContentHeader from './AppContentHeader';
import AppContentList from './AppContentList';
import AppContentFooter from './AppContentFooter';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appContent: {
    overflow: 'hidden',
  },
});

const AppContent: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Stack direction={'column'} spacing={2} className={classes.appContent}>
      <AppContentHeader />

      <AppContentList />

      <AppContentFooter />
    </Stack>
  );
};

export default AppContent;
