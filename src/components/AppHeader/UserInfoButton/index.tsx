import React, { FC, ReactElement } from 'react';
import { Button, ListItemIcon, Menu, MenuItem, Stack, Theme, Tooltip, Typography } from '@mui/material';
import AppAvatar from '../../AppAvatar';
import { useAppSelector } from '../../../store/hooks';
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import useModalVisibility from '../../../hooks/useModalVisibility';
import LogoutConfirmationModal from '../../LogoutConfirmationModal';

const useStyles = makeStyles((theme: Theme) => ({
  userInfoButtonData: {
    marginRight: theme.spacing(2),
  },
}));

const UserInfoButton: FC = (): ReactElement => {
  const classes = useStyles();
  const {user} = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const {modalVisibility, setModalVisibility} = useModalVisibility();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const {name, avatar} = user;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setModalVisibility(true);
  };

  return (
    <>
      <Tooltip title={'User info'}>
        <Button
        onClick={handleClick}
        variant={'text'}
        color={'inherit'}
        aria-label={'User info'}>
          <Stack direction={'column'} spacing={2} alignItems={'center'} justifyContent={'start'} className={classes.userInfoButtonData}>
            <Typography variant={'subtitle2'}>
              {name}
            </Typography>
          </Stack>

          <AppAvatar src={avatar} alt={name} user={user}/>
        </Button>
      </Tooltip>

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
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={() => navigate('user-info')}>
          <ListItemIcon>
            <AccountCircleIcon fontSize={'medium'} />
          </ListItemIcon>
          User Profile
        </MenuItem>

        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <LogoutIcon fontSize={'medium'} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      <LogoutConfirmationModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  );
};

export default UserInfoButton;