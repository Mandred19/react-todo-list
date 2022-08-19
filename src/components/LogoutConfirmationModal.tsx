import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import AppModal from './AppModal';
import { IUseModalVisibility } from '../hooks/useModalVisibility';
import { logout } from '../store/actions/user.action';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';

const LogoutConfirmationModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = async () => {
    await dispatch(logout());
    navigate('sign-in');
  };

  return (
    <AppModal
      headerText={'Confirm logout'}
      footerSubmitButtonText={'Logout'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'warning'}
      isPending={false}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          You will be logged out.
        </Typography>

        <Typography variant={'body1'}>
          Are you sure?
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default LogoutConfirmationModal;