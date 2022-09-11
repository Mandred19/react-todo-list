import React, { FC, ReactElement, useEffect } from 'react';
import { Button, IconButton, ListItemIcon, Menu, MenuItem, Stack, Theme, Tooltip } from '@mui/material';
import AppAvatar from '../../components/AppAvatar';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import UserInfoItem from './UserInfoItem';
import { makeStyles } from '@mui/styles';
import Logout from '../../components/Logout';
import EditIcon from '@mui/icons-material/Edit';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EditUserInfoModal from './EditUserInfoModal';
import DeleteUserModal from './DeleteUserModal';
import useModalVisibility from '../../hooks/useModalVisibility';
import { updateUserInfo } from '../../store/actions/user.action';
import { useTranslation } from 'react-i18next';
import { flexLayoutMixin } from '../../styles/mixins';
import ChangeLanguage from './ChangeLanguage';

const useStyles = makeStyles((theme: Theme) => ({
  userInfoWrapper: {
    height: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  userInfoItem: {
    height: '100%',
  },
  userAvatarWrapper: {
    ...flexLayoutMixin('flex-start', 'center'),
    flexFlow: 'column nowrap',
    marginBottom: theme.spacing(2),
  },
  userInfoAvatar: {
    width: '150px !important',
    height: '150px !important',
    marginBottom: theme.spacing(1),
  },
}));

const UserInfo: FC = (): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(['common', 'userInfo']);
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.userSlice);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const {modalVisibility: editModalVisibility, setModalVisibility: setEditModalVisibility} = useModalVisibility();
  const {modalVisibility: deleteModalVisibility, setModalVisibility: setDeleteModalVisibility} = useModalVisibility();

  const {id, name, email, avatar, createdAt, updatedAt} = user;

  useEffect(() => {
    dispatch(updateUserInfo(user.id));
  }, []);

  const formatDate = (date: string): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour12: false,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date(date));
  };

  const editHandle = () => {
    setEditModalVisibility(true);
  };

  const deleteHandle = () => {
    setDeleteModalVisibility(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction={'row'} spacing={2} flexGrow={1} className={classes.userInfoWrapper}>
        <Stack direction={'column'} spacing={2} flexGrow={1} className={classes.userInfoItem}>
          <div className={classes.userAvatarWrapper}>
            <AppAvatar src={avatar} alt={name} user={user} className={classes.userInfoAvatar}/>

            <Stack direction={'row'} spacing={1}>
              <Tooltip title={t('Click to upgrade avatar', { ns: 'userInfo' })}>
                <span>
                  <IconButton
                    onClick={handleClick}
                    color={'primary'}
                    disabled={false}
                    size={'large'}
                    aria-label={t('Click to upgrade avatar', { ns: 'userInfo' })}>
                    <AddAPhotoIcon />
                  </IconButton>
                </span>
              </Tooltip>

              <Tooltip title={t('Click to delete avatar', { ns: 'userInfo' })}>
                <span>
                  <IconButton
                    onClick={() => console.warn(333)}
                    color={'error'}
                    disabled={false}
                    size={'large'}
                    aria-label={t('Click to delete avatar', { ns: 'userInfo' })}>
                    <DeleteIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </Stack>
          </div>

          <ChangeLanguage/>
        </Stack>

        <Stack direction={'column'} spacing={2} flexGrow={1} className={classes.userInfoItem} justifyContent={'space-between'}>
          <Stack direction={'column'} spacing={2} justifyContent={'space-between'}>
            <UserInfoItem propName={'ID:'} propValue={id} />

            <UserInfoItem propName={`${t('Name', { ns: 'userInfo' })}:`} propValue={name} />

            <UserInfoItem propName={`${t('Email', { ns: 'userInfo' })}:`} propValue={email} />

            <UserInfoItem propName={`${t('Created date')}:`} propValue={formatDate(createdAt)} />

            <UserInfoItem propName={`${t('Updated date')}:`} propValue={formatDate(updatedAt)} />

            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Tooltip title={t('Click to edit user info', { ns: 'userInfo' })}>
                <Button onClick={() => editHandle()} variant={'outlined'} color={'inherit'} startIcon={<EditIcon />} aria-label={'Click to edit user info'}>
                  {t('Edit user', { ns: 'userInfo' })}
                </Button>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Logout variant={'textButton'} />
            </Stack>

            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Tooltip title={t('Click to delete user info', { ns: 'userInfo' })}>
                <Button onClick={() => deleteHandle()} variant={'outlined'} color={'error'} startIcon={<DeleteIcon />} aria-label={'Click to delete user'}>
                  {t('Delete user', { ns: 'userInfo' })}
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
      >
        <MenuItem onClick={() => console.warn(111111)}>
          <ListItemIcon>
            <CameraAltIcon fontSize={'medium'} />
          </ListItemIcon>
          {t('Make a photo with a webcam', { ns: 'userInfo' })}
        </MenuItem>

        <MenuItem onClick={() => console.warn(222222)}>
          <ListItemIcon>
            <AddPhotoAlternateIcon fontSize={'medium'} />
          </ListItemIcon>
          {t('Add photo from library', { ns: 'userInfo' })}
        </MenuItem>
      </Menu>

      <EditUserInfoModal modalVisibility={editModalVisibility} setModalVisibility={setEditModalVisibility} />

      <DeleteUserModal modalVisibility={deleteModalVisibility} setModalVisibility={setDeleteModalVisibility} currentId={user.id} />
    </>
  );
};

export default UserInfo;