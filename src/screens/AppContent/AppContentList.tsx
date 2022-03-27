import React, { FC, ReactElement, useEffect } from 'react';
import { List, Stack, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodoList } from '../../store/actions/todoLIstActions';
import { ITodoListItem } from '../../store/reducers/todoListSlice';
import AppContentListCard from './AppContentListCard';

const AppContentList: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { todoList, pending } = useAppSelector((state) => state.todoListSlice);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  return (
    <>
      {todoList.length ?
        <List sx={{ width: '100%', minWidth: 360 }}>
          {todoList.map((todoItem: ITodoListItem) => <AppContentListCard key={todoItem.id} pending={pending} {...todoItem} />)}
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
