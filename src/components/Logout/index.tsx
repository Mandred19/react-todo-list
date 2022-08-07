import React, { FC, ReactElement } from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/actions/user.action';
import { useNavigate } from 'react-router-dom';

const Logout: FC<Props> = ({ variant }): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandle = async () => {
    await dispatch(logout());
    navigate('sign-in');
  };

  return (
    <>
      {
        variant === 'iconButton' ?
          <Tooltip title={'Logout'}>
            <IconButton
              onClick={() => logoutHandle()}
              color={'warning'}>
              <LogoutIcon/>
            </IconButton>
          </Tooltip>
        :
          <Tooltip title={'Logout'}>
            <Button
              onClick={() => logoutHandle()}
              variant={'outlined'}
              color={'warning'}
              startIcon={<LogoutIcon />}
              aria-label={'Logout'}>
              Logout
            </Button>
          </Tooltip>
      }
    </>
  );
};

export default Logout;

interface Props {
  variant: 'iconButton' | 'textButton',
}