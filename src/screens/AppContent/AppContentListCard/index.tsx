import React, { FC, ReactElement, useState } from 'react';
import { Box, Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin } from '../../../styles/mixins';
import { ITodoListItem } from '../../../store/reducers/todoListSlice';
import {
  toggleCompleteTodoListItem,
  toggleFavoriteTodoListItem,
} from '../../../store/actions/todoLIstActions';
import { useAppDispatch } from '../../../store/hooks';
import useModalVisibility from '../../../hooks/useModalVisibility';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const useStyles = makeStyles({
  listItemButtons: {
    ...betweenChildrenMixin({
      marginRight: 16,
    }),
  },
});

const AppContentListCard: FC<IAppContentListCardProps> = (props: IAppContentListCardProps): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {id, isComplete, isFavorite, title, pending} = props;
  const [checked, setChecked] = useState<Array<ITodoListItem>>([]);
  const [deletedItemId, setDeletedItemId] = useState<string>('');
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  const checkBoxHandler = (item: ITodoListItem) => () => {
    const currentIndex = checked.findIndex((item) => item.id === item.id);
    const newChecked = [...checked];

    currentIndex === -1 ? newChecked.push(item) : newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  const iconButtonHandler = (value: string, payload: ITodoListItem) => {
    switch (value) {
      case 'editItem':
        console.warn('Open modal and edit', payload);
        break;
      case 'setComplete':
        dispatch(toggleCompleteTodoListItem(payload));
        break;
      case 'setFavorite':
        dispatch(toggleFavoriteTodoListItem(payload));
        break;
      case 'deleteItem':
        setDeletedItemId(payload.id);
        setModalVisibility(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <Box className={classes.listItemButtons}>
            <IconButton
              onClick={() => iconButtonHandler('editItem', props)}
              color={'default'}
              disabled={pending || isComplete}
              title={'Edit item'}
              edge='end'
              aria-label='edit'>
              <EditIcon />
            </IconButton>

            <IconButton
              onClick={() => iconButtonHandler('setComplete', { ...props, isComplete: !isComplete })}
              color={isComplete ? 'info' : 'default'}
              disabled={pending}
              title={'Set as completed'}
              edge='end'
              aria-label='done'>
              <CheckCircleIcon />
            </IconButton>

            <IconButton
              onClick={() => iconButtonHandler('setFavorite', { ...props, isFavorite: !isFavorite })}
              color={isFavorite ? 'warning' : 'default'}
              disabled={pending}
              title={'Set as favorite'}
              edge='end'
              aria-label='favorite'>
              <StarIcon />
            </IconButton>

            <IconButton
              onClick={() => iconButtonHandler('deleteItem', props)}
              color={'error'}
              disabled={pending}
              title={'Delete this item'}
              edge='end'
              aria-label='delete'>
              <DeleteIcon />
            </IconButton>
          </Box>
        }>

        <ListItemButton
          role={'checkbox'}
          onClick={checkBoxHandler(props)}
          divider
          dense>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={!!checked.find((item) => item.id === id)}
              tabIndex={-1}
              disableRipple
              title={'Select this item'}
              inputProps={{ 'aria-labelledby': id }} />
          </ListItemIcon>

          <ListItemText id={id} primary={title} title={title} />
        </ListItemButton>
      </ListItem>

      <DeleteConfirmationModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} currentId={deletedItemId}/>
    </>
  );
};

export default AppContentListCard;

interface IAppContentListCardProps extends ITodoListItem {
  pending: boolean,
}
