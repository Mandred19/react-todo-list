import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import AppModal from '../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';
import { deleteAllTodoListItems } from '../../../store/actions/todoList.action';
import { useTranslation } from 'react-i18next';

const DeleteAllItemsConfirmationModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const { t } = useTranslation(['common', 'list']);
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.todoListSlice);

  const submitHandler = async (): Promise<void> => {
    await dispatch(deleteAllTodoListItems());
  };

  return (
    <AppModal
      headerText={t('list_clear_list_modal_title', { ns: 'list' })}
      footerSubmitButtonText={t('common_delete_text')}
      footerCancelButtonText={t('common_cancel_text')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('list_clear_list_modal_message', { ns: 'list' })}
        </Typography>

        <Typography variant={'body1'}>
          {t('common_are_you_sure_message')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteAllItemsConfirmationModal;