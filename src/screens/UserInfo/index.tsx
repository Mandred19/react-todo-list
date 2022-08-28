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

const useStyles = makeStyles((theme: Theme) => ({
  userInfoWrapper: {
    height: '100%',
    padding: theme.spacing(2),
  },
  userInfoItem: {
    height: '100%',
  },
  userInfoAvatar: {
    width: '150px !important',
    height: '150px !important',
  },
}));

const UserInfo: FC = (): ReactElement => {
  const classes = useStyles();
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
          <AppAvatar src={avatar} alt={name} user={user} className={classes.userInfoAvatar}/>

          <Stack direction={'row'} spacing={1}>
            <Tooltip title={'Click to upgrade avatar'}>
              <span>
                <IconButton
                  onClick={handleClick}
                  color={'primary'}
                  disabled={false}
                  size={'large'}
                  aria-label={'Click to upgrade avatar'}>
                  <AddAPhotoIcon />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title={'Click to delete avatar'}>
              <span>
                <IconButton
                  onClick={() => console.warn(333)}
                  color={'error'}
                  disabled={false}
                  size={'large'}
                  aria-label={'Click to delete avatar'}>
                  <DeleteIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack direction={'column'} spacing={2} flexGrow={1} className={classes.userInfoItem} justifyContent={'space-between'}>
          <Stack direction={'column'} spacing={2} justifyContent={'space-between'}>
            <UserInfoItem propName={'ID:'} propValue={id} />

            <UserInfoItem propName={'User name:'} propValue={name} />

            <UserInfoItem propName={'E-mail:'} propValue={email} />

            <UserInfoItem propName={'Created at:'} propValue={formatDate(createdAt)} />

            <UserInfoItem propName={'Updated at:'} propValue={formatDate(updatedAt)} />

            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Tooltip title={'Click to edit user info'}>
                <Button
                  onClick={() => editHandle()}
                  variant={'outlined'}
                  color={'inherit'}
                  startIcon={<EditIcon />}
                  aria-label={'Click to edit user info'}>
                  Edit user
                </Button>
              </Tooltip>
            </Stack>
          </Stack>

          <Stack alignItems={'center'} justifyContent={'space-between'} direction={'row'}>
            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Logout variant={'textButton'}/>
            </Stack>

            <Stack flexShrink={0} alignSelf={'flex-start'}>
              <Tooltip title={'Click to delete user'}>
                <Button
                  onClick={() => deleteHandle()}
                  variant={'outlined'}
                  color={'error'}
                  startIcon={<DeleteIcon />}
                  aria-label={'Click to delete user'}>
                  Delete user
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
        }}>
        <MenuItem onClick={() => console.warn(111111) }>
          <ListItemIcon>
            <CameraAltIcon fontSize={'medium'} />
          </ListItemIcon>
          Make a photo with a webcam
        </MenuItem>

        <MenuItem onClick={() => console.warn(222222) }>
          <ListItemIcon>
            <AddPhotoAlternateIcon fontSize={'medium'} />
          </ListItemIcon>
          Add photo from library
        </MenuItem>
      </Menu>

      <EditUserInfoModal modalVisibility={editModalVisibility} setModalVisibility={setEditModalVisibility}/>

      <DeleteUserModal modalVisibility={deleteModalVisibility} setModalVisibility={setDeleteModalVisibility} currentId={user.id}/>
    </>
  );
};

export default UserInfo;