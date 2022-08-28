import React, {FC, ReactElement} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import AppModal from '../../components/AppModal';
import { Stack, Typography } from '@mui/material';
import { deleteUser } from '../../store/actions/user.action';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';
import { useNavigate } from 'react-router-dom';

const DeleteUserModal: FC<Props> = ({modalVisibility, setModalVisibility, currentId}): ReactElement => {
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const submitHandler = async (): Promise<void> => {
    await dispatch(deleteUser(currentId));
    navigate('sign-in');
  };

  return (
    <AppModal
      headerText={'Confirm delete user'}
      footerSubmitButtonText={'Delete'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'error'}
      isPending={isPending}>
      <Stack direction={'column'} spacing={2}>
        <Typography variant={'body1'}>
          You are about to delete user.
        </Typography>

        <Typography variant={'body1'}>
          Are you sure?
        </Typography>
      </Stack>
    </AppModal>
  );
};

export default DeleteUserModal;

interface Props extends IUseModalVisibility {
  currentId: string,
}
