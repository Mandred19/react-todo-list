import React, { FC, ReactElement } from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import useModalVisibility from '../../hooks/useModalVisibility';
import LogoutConfirmationModal from '../LogoutConfirmationModal';

const Logout: FC<Props> = ({ variant }): ReactElement => {
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  const logoutHandle = async () => {
    setModalVisibility(true);
  };

  return (
    <>
      {
        variant === 'iconButton' ?
          <Tooltip title={'Logout'}>
            <IconButton
              onClick={() => logoutHandle()}
              color={'warning'}>
              <LogoutIcon/>
            </IconButton>
          </Tooltip>
        :
          <Tooltip title={'Logout'}>
            <Button
              onClick={() => logoutHandle()}
              variant={'outlined'}
              color={'warning'}
              startIcon={<LogoutIcon />}
              aria-label={'Logout'}>
              Logout
            </Button>
          </Tooltip>
      }

      <LogoutConfirmationModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  );
};

export default Logout;

interface Props {
  variant: 'iconButton' | 'textButton',
}