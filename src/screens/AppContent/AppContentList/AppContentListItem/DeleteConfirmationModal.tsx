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
      headerText={t('list_item_delete_task_modal_title', { ns: 'listItem' })}
      footerSubmitButtonText={t('common_delete_text')}
      footerCancelButtonText={t('common_cancel_text')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          {t('list_item_delete_task_modal_message', { ns: 'listItem' })}
        </Typography>

        <Typography variant={'body1'}>
          {t('common_are_you_sure_message')}
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteConfirmationModal;

interface IDeleteConfirmationModal extends IUseModalVisibility {
  currentId: string,
}
