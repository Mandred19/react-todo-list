import React, {FC, ReactElement} from 'react';
import { Stack } from '@mui/material';
import AppContentHeader from './AppContentHeader';
import AppContentList from './AppContentList';
import AppContentFooter from './AppContentFooter';
import { makeStyles } from '@mui/styles';
import { useFetchAllItemsQuery } from '../../store/services/todoList.service';

const useStyles = makeStyles({
  appContent: {
    overflow: 'hidden',
    height: '100%',
  },
});

const AppContent: FC = (): ReactElement => {
  const classes = useStyles();
  const { data: todoList = [] } = useFetchAllItemsQuery();

  return (
    <Stack direction={'column'} className={classes.appContent}>
      <AppContentHeader />

      <AppContentList />

      {todoList.length ? <AppContentFooter/> : ''}
    </Stack>
  );
};

export default AppContent;
