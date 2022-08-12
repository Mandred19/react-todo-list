import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import AppModal from '../../../components/AppModal';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';

const DeleteAllItemsConfirmationModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.todoListSlice);

  const submitHandler = async (): Promise<void> => {
    // await dispatch(deleteAllTodoListItems());
  };

  return (
    <AppModal
      headerText={'Confirm delete all items'}
      footerSubmitButtonText={'Delete'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          You are about to delete all items in list.
        </Typography>

        <Typography variant={'body1'}>
          Are you sure?
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteAllItemsConfirmationModal;