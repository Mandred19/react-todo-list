import React, { FC, ReactElement, useEffect } from 'react';
import { List, Stack, Typography } from '@mui/material';
import AppContentListItem from './AppContentListItem';
import { ITodoListItem } from '../../../store/types/todoList.types';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchTodoList } from '../../../store/actions/todoList.action';
import { useTranslation } from 'react-i18next';

const AppContentList: FC = (): ReactElement => {
  const { t } = useTranslation(['list']);
  const dispatch = useAppDispatch();
  const { todoList, isFetching: pending } = useAppSelector((state) => state.todoListSlice);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  return (
    <>
      {todoList.length ?
        <List sx={{ width: '100%', minWidth: 360 }}>
          {todoList.map((todoItem: ITodoListItem) => <AppContentListItem key={todoItem.id} pending={pending} {...todoItem} />)}
        </List>
        :
        <Stack alignItems={'center'} justifyContent={'center'}>
          <Typography variant={'h6'}>
            {t('List is empty', { ns: 'list' })}
          </Typography>
        </Stack>
      }
    </>
  );
};

export default AppContentList;
