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
      headerText={t('Confirm delete all tasks', { ns: 'list' })}
      footerSubmitButtonText={t('Delete')}
      footerCancelButtonText={t('Cancel')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('You are about to delete all tasks in list', { ns: 'list' })}
        </Typography>

        <Typography variant={'body1'}>
          {t('Are you sure')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteAllItemsConfirmationModal;