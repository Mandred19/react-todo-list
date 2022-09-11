import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import AppModal from './AppModal';
import { IUseModalVisibility } from '../hooks/useModalVisibility';
import { logout } from '../store/actions/user.action';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LogoutConfirmationModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const { t } = useTranslation(['common']);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = async () => {
    await dispatch(logout());
    navigate('sign-in');
  };

  return (
    <AppModal
      headerText={t('Confirm logout')}
      footerSubmitButtonText={t('Logout')}
      footerCancelButtonText={t('Cancel')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'warning'}
      isPending={false}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('You will be logged out')}
        </Typography>

        <Typography variant={'body1'}>
          {t('Are you sure')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default LogoutConfirmationModal;