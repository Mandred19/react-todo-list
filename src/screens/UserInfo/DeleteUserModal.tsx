import React, {FC, ReactElement} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AppModal from '../../components/AppModal';
import { Stack, Typography } from '@mui/material';
import { deleteUser } from '../../store/actions/user.action';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DeleteUserModal: FC<Props> = ({modalVisibility, setModalVisibility, currentId}): ReactElement => {
  const { t } = useTranslation(['common', 'userInfo']);
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const submitHandler = async (): Promise<void> => {
    await dispatch(deleteUser(currentId));
    navigate('sign-in');
  };

  return (
    <AppModal
      headerText={t('user_info_delete_user_modal_title', { ns: 'userInfo' })}
      footerSubmitButtonText={t('common_delete_text')}
      footerCancelButtonText={t('common_cancel_text')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('user_info_delete_user_modal_message', { ns: 'userInfo' })}
        </Typography>

        <Typography variant={'body1'}>
          {t('common_are_you_sure_message')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteUserModal;

interface Props extends IUseModalVisibility {
  currentId: string,
}
