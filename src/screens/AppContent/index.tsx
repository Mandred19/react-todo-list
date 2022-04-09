import React, {FC, ReactElement} from 'react';
import { Stack } from '@mui/material';
import AppContentHeader from './AppContentHeader';
import AppContentList from './AppContentList';
import AppContentFooter from './AppContentFooter';
import { makeStyles } from '@mui/styles';
import {useAppSelector} from '../../store/hooks';

const useStyles = makeStyles({
  appContent: {
    overflow: 'hidden',
  },
});

const AppContent: FC = (): ReactElement => {
  const classes = useStyles();
  const { todoList } = useAppSelector((state) => state.todoListSlice);

  return (
    <Stack direction={'column'} className={classes.appContent}>
      <AppContentHeader />

      <AppContentList />

      {todoList.length ? <AppContentFooter/> : ''}
    </Stack>
  );
};

export default AppContent;
