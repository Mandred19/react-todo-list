import React, { FC, ReactElement } from 'react';
import { List, Stack, Typography } from '@mui/material';
import AppContentListItem from './AppContentListItem';
import { useFetchAllItemsQuery } from '../../../store/services/todoList.service';
import { ITodoListItem } from '../../../store/types/todoList.types';

const AppContentList: FC = (): ReactElement => {
  const { data: todoList = [], isFetching: pending } = useFetchAllItemsQuery();

  return (
    <>
      {todoList.length ?
        <List sx={{ width: '100%', minWidth: 360 }}>
          {todoList.map((todoItem: ITodoListItem) => <AppContentListItem key={todoItem.id} pending={pending} {...todoItem} />)}
        </List>
        :
        <Stack alignItems={'center'} justifyContent={'center'}>
          <Typography variant={'h6'}>
            List is empty
          </Typography>
        </Stack>
      }
    </>
  );
};

export default AppContentList;
