import React, {FC, ReactElement} from 'react';
import {Stack, Typography} from '@mui/material';
import AppModal from '../../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {IUseModalVisibility} from '../../../../hooks/useModalVisibility';
import { deleteTodoListItem } from '../../../../store/actions/todoList.action';
import { useTranslation } from 'react-i18next';

const DeleteConfirmationModal: FC<IDeleteConfirmationModal> = ({modalVisibility, setModalVisibility, currentId}): ReactElement => {
  const { t } = useTranslation(['common', 'listItem']);
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.todoListSlice);

  const submitHandler = async (): Promise<void> => {
    await dispatch(deleteTodoListItem(currentId));
  };

  return (
    <AppModal
      headerText={t('Confirm delete task', { ns: 'listItem' })}
      footerSubmitButtonText={t('Delete')}
      footerCancelButtonText={t('Cancel')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('You are about to delete this task', { ns: 'listItem' })}
        </Typography>

        <Typography variant={'body1'}>
          {t('Are you sure')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteConfirmationModal;

interface IDeleteConfirmationModal extends IUseModalVisibility {
  currentId: string,
}
