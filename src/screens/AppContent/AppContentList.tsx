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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { betweenChildrenMixin } from '../../theme/styleMixins';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  deleteTodoListItem,
  fetchTodoList,
  toggleCompleteTodoListItem,
  toggleFavoriteTodoListItem,
} from '../../store/actions/todoLIstActions';
import { ITodoListItem } from '../../store/reducers/todoListSlice';

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
  const { todoList, pending } = useAppSelector((state) => state.todoListSlice);
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

  const iconButtonHandler = (value: string, payload: ITodoListItem) => {
    switch (value) {
      case 'setComplete':
        dispatch(toggleCompleteTodoListItem(payload));
        break;
      case 'setFavorite':
        dispatch(toggleFavoriteTodoListItem(payload));
        break;
      case 'deleteItem':
        dispatch(deleteTodoListItem(payload.id));
        break;
      default:
        break;
    }
  };

  return (
    <>
      {todoList.length ? <List sx={{ width: '100%', minWidth: 360 }}>
          {todoList.map((todoItem: ITodoListItem) => {
            return (
              <ListItem
                key={todoItem.id}
                disablePadding
                secondaryAction={
                  <Box className={classes.listItemButtons}>
                    <IconButton
                      onClick={() => iconButtonHandler('setComplete', { ...todoItem, isComplete: !todoItem.isComplete })}
                      color={todoItem.isComplete ? 'info' : 'default'}
                      disabled={pending}
                      title={'Set as completed'}
                      edge='end'
                      aria-label='done'>
                      <CheckCircleIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => iconButtonHandler('setFavorite', { ...todoItem, isFavorite: !todoItem.isFavorite })}
                      color={todoItem.isFavorite ? 'warning' : 'default'}
                      disabled={pending}
                      title={'Set as favorite'}
                      edge='end'
                      aria-label='favorite'>
                      <StarIcon />
                    </IconButton>

                    <IconButton onClick={() => iconButtonHandler('deleteItem', todoItem)}
                                color={'error'}
                                disabled={pending}
                                title={'Delete this item'}
                                edge='end'
                                aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                }>

                <ListItemButton role={'checkbox'} onClick={checkBoxHandler(todoItem)} dense>
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
            List is empty
          </Typography>
        </Stack>
      }
    </>
  );
};

export default AppContentList;
