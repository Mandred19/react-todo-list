import React, { FC, ReactElement, useState } from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip, Typography
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import useModalVisibility from '../../../../hooks/useModalVisibility';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { breakpointMixin } from '../../../../styles/mixins';
import { ITodoListItem, ITodoListItemUpdateDto } from '../../../../store/types/todoList.types';
import { toggleStateItem } from '../../../../store/actions/todoList.action';
import { useAppDispatch } from '../../../../store/hooks';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  // TODO fix styles without !important
  listItemButton: {
    paddingRight: '120px !important',
    overflow: 'hidden',

    ...breakpointMixin(768, 0, {
      paddingRight: '320px !important',
    }),
  },
}));

const AppContentListItem: FC<IAppContentListCardProps> = (props: IAppContentListCardProps): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(['common', 'listItem']);
  const {id, isComplete, isFavorite, title, pending} = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState<Array<ITodoListItem>>([]);
  const [deletedItemId, setDeletedItemId] = useState<string>('');
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  const checkBoxHandler = (item: ITodoListItem) => () => {
    const currentIndex = checked.findIndex((item) => item.id === item.id);
    const newChecked = [...checked];

    currentIndex === -1 ? newChecked.push(item) : newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  const changeStateItem = (data: ITodoListItemUpdateDto) => {
    dispatch(toggleStateItem(data));
  };

  const prepareDeleteItem = (id: string) => {
    setDeletedItemId(id);
    setModalVisibility(true);
  };

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <Stack direction={'row'} spacing={2}>
            <Tooltip title={t('Open', { ns: 'listItem' })}>
              <span>
                <IconButton
                  onClick={() => navigate(`list/${id}`)}
                  color={'default'}
                  disabled={pending}
                  aria-label={t('Open', { ns: 'listItem' })}>
                  <OpenInNewIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={isComplete ? t('Completed task is not editable', { ns: 'listItem' }) : t('Edit', { ns: 'listItem' })}>
              <span>
                <IconButton
                  onClick={() => console.warn('EDIT', props) }
                  color={'default'}
                  disabled={pending || isComplete}
                  aria-label={isComplete ? t('Completed task is not editable', { ns: 'listItem' }) : t('Edit', { ns: 'listItem' })}>
                  <EditIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={t('Set as completed', { ns: 'listItem' })}>
              <span>
                <IconButton
                  onClick={() => changeStateItem({ id, isComplete: !isComplete })}
                  color={isComplete ? 'info' : 'default'}
                  disabled={pending}
                  aria-label={t('Set as completed', { ns: 'listItem' })}>
                  <CheckCircleIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={t('Set as favorite', { ns: 'listItem' })}>
              <span>
                <IconButton
                  onClick={() => changeStateItem({ id, isFavorite: !isFavorite })}
                  color={isFavorite ? 'warning' : 'default'}
                  disabled={pending}
                  aria-label={t('Set as favorite', { ns: 'listItem' })}>
                  <StarIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={t('Delete')}>
              <span>
                <IconButton
                  onClick={() => prepareDeleteItem(id)}
                  color={'error'}
                  disabled={pending}
                  aria-label={t('Delete')}>
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
          className={classes.listItemButton}>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={!!checked.find((item) => item.id === id)}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': id }} />
          </ListItemIcon>

          <ListItemText id={id}>
            <Typography variant={'body1'} noWrap>
              {title}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <DeleteConfirmationModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} currentId={deletedItemId}/>
    </>
  );
};

export default AppContentListItem;

interface IAppContentListCardProps extends ITodoListItem {
  pending: boolean,
}
