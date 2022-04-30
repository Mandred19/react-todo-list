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
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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

  const iconButtonHandler = (value: IconButtonHandlerValue, payload: ITodoListItem) => {
    switch (value) {
      case 'open':
        console.warn('Go to item page', payload);
        break;
      case 'edit':
        console.warn('Open modal and edit', payload);
        break;
      case 'setComplete':
        dispatch(toggleCompleteTodoListItem(payload));
        break;
      case 'setFavorite':
        dispatch(toggleFavoriteTodoListItem(payload));
        break;
      case 'delete':
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
            <Tooltip title={'Open'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('open', props)}
                  color={'default'}
                  disabled={pending}
                  aria-label={'Open'}>
                  <OpenInNewIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={isComplete ? 'Completed item is not editable' : 'Edit'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('edit', props)}
                  color={'default'}
                  disabled={pending || isComplete}
                  aria-label={isComplete ? 'Completed item is not editable' : 'Edit'}>
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

            <Tooltip title={'Delete'}>
              <span>
                <IconButton
                  onClick={() => iconButtonHandler('delete', props)}
                  color={'error'}
                  disabled={pending}
                  aria-label='Delete'>
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

type IconButtonHandlerValue = 'open' | 'edit' | 'setComplete' | 'setFavorite' | 'delete';
