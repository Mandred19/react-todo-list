import React, { FC, ReactElement, useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITodoListItem } from '../../../store/reducers/todoListSlice';
import {
  toggleCompleteTodoListItem,
  toggleFavoriteTodoListItem,
} from '../../../store/actions/todoLIstActions';
import { useAppDispatch } from '../../../store/hooks';
import useModalVisibility from '../../../hooks/useModalVisibility';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const AppContentListCard: FC<IAppContentListCardProps> = (props: IAppContentListCardProps): ReactElement => {
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
          <Stack direction={'row'} spacing={2}>
            <Tooltip title={isComplete ? 'Completed item is not editable' : 'Edit item'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('editItem', props)}
                  color={'default'}
                  disabled={pending || isComplete}
                  aria-label={isComplete ? 'Completed item is not editable' : 'Edit item'}>
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={'Set as completed'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('setComplete', { ...props, isComplete: !isComplete })}
                  color={isComplete ? 'info' : 'default'}
                  disabled={pending}
                  aria-label='Set as completed'>
                  <CheckCircleIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={'Set as favorite'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('setFavorite', { ...props, isFavorite: !isFavorite })}
                  color={isFavorite ? 'warning' : 'default'}
                  disabled={pending}
                  aria-label='Set as favorite'>
                  <StarIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={'Delete item'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('deleteItem', props)}
                  color={'error'}
                  disabled={pending}
                  aria-label='Delete item'>
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Stack>
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
              inputProps={{ 'aria-labelledby': id }} />
          </ListItemIcon>

          <ListItemText id={id} primary={title} />
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
