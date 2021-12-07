import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { betweenChildrenMixin } from '../../theme/styleMixins';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTodoListItem, fetchTodoList, toggleFavoriteTodoListItem } from '../../store/actions/todoLIstActions';
import { ITodoListItem } from '../../types/TodoListItem';

const useStyles = makeStyles({
  listItemButtons: {
    ...betweenChildrenMixin({
      marginRight: 16,
    }),
  },
});

const AppContentList: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {todoList, pending} = useAppSelector((state) => state.todoListSlice);
  const [checked, setChecked] = useState<Array<ITodoListItem>>([]);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const checkBoxHandler = (todoItem: ITodoListItem) => () => {
    const currentIndex = checked.findIndex((item) => item.id === todoItem.id);
    const newChecked = [...checked];

    currentIndex === -1 ? newChecked.push(todoItem) : newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  const iconButtonHandler = (value: string, payload: any) => {
    switch (value) {
      case 'setComplete': break;
      case 'setFavorite':
        dispatch(toggleFavoriteTodoListItem(payload));
        break;
      case 'deleteItem':
        dispatch(deleteTodoListItem(payload));
        break;
      default: break;
    }
  };

  return (
    <>
      {todoList.length ? <List sx={{ width: '100%', minWidth: 360 }}>
        {todoList.map((todoItem: ITodoListItem) => {
          return (
            <ListItem
              key={todoItem.id}
              secondaryAction={
                <Box className={classes.listItemButtons}>
                  <IconButton onClick={() => iconButtonHandler('setComplete', '')}
                              color={todoItem.isComplete ? 'info' : 'default'}
                              disabled={pending}
                              title={'Set as done'}
                              edge='end'
                              aria-label='done'>
                    <CheckOutlinedIcon />
                  </IconButton>

                  <IconButton onClick={() => iconButtonHandler('setFavorite', {...todoItem, isFavorite: !todoItem.isFavorite})}
                              color={todoItem.isFavorite ? 'warning' : 'default'}
                              disabled={pending}
                              title={'Set as favorite'}
                              edge='end'
                              aria-label='favorite'>
                    <StarBorderOutlinedIcon />
                  </IconButton>

                  <IconButton onClick={() => iconButtonHandler('deleteItem', todoItem.id)}
                              color={'error'}
                              disabled={pending}
                              title={'Delete this item'}
                              edge='end'
                              aria-label='delete'>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              }
              disablePadding>

              <ListItemButton role={'checkbox'} onClick={checkBoxHandler(todoItem)} disabled={pending} dense>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={!!checked.find((item) => item.id === todoItem.id)}
                    tabIndex={-1}
                    disableRipple
                    title={'Select this item'}
                    inputProps={{ 'aria-labelledby': todoItem.id }} />
                </ListItemIcon>

                <ListItemText id={todoItem.id} primary={todoItem.title} title={todoItem.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
        </List>
          :
        <Stack alignItems={'center'} justifyContent={'center'}>
          <Typography variant={'h6'}>
            This list is empty
          </Typography>
        </Stack>
      }
    </>
  );
};

export default AppContentList;
