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
      headerText={t('common_logout_modal_title')}
      footerSubmitButtonText={t('common_logout_li')}
      footerCancelButtonText={t('common_cancel_text')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'warning'}
      isPending={false}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('common_logout_modal_message')}
        </Typography>

        <Typography variant={'body1'}>
          {t('common_are_you_sure_message')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default LogoutConfirmationModal;