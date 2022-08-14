import React, {FC, ReactElement} from 'react';
import {Stack, Typography} from '@mui/material';
import AppModal from '../../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {IUseModalVisibility} from '../../../../hooks/useModalVisibility';
import { deleteTodoListItem } from '../../../../store/actions/todoList.action';

const DeleteConfirmationModal: FC<IDeleteConfirmationModal> = ({modalVisibility, setModalVisibility, currentId}): ReactElement => {
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.todoListSlice);

  const submitHandler = async (): Promise<void> => {
    await dispatch(deleteTodoListItem(currentId));
  };

  return (
    <AppModal
      headerText={'Confirm delete item'}
      footerSubmitButtonText={'Delete'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          You are about to delete this item.
        </Typography>

        <Typography variant={'body1'}>
          Are you sure?
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteConfirmationModal;

interface IDeleteConfirmationModal extends IUseModalVisibility {
  currentId: string,
}
