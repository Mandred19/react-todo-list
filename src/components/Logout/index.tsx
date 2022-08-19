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
          <Tooltip title={'Click to logged out'}>
            <IconButton
              onClick={() => logoutHandle()}
              color={'warning'}
              aria-label={'Click to logged out'}>
              <LogoutIcon/>
            </IconButton>
          </Tooltip>
        :
          <Tooltip title={'Click to logged out'}>
            <Button
              onClick={() => logoutHandle()}
              variant={'outlined'}
              color={'warning'}
              startIcon={<LogoutIcon />}
              aria-label={'Click to logged out'}>
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