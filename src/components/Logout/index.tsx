import React, { FC, ReactElement } from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import useModalVisibility from '../../hooks/useModalVisibility';
import LogoutConfirmationModal from '../LogoutConfirmationModal';
import { useTranslation } from 'react-i18next';

const Logout: FC<Props> = ({ variant }): ReactElement => {
  const { t } = useTranslation(['common']);
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  const logoutHandle = async () => {
    setModalVisibility(true);
  };

  return (
    <>
      {
        variant === 'iconButton' ?
          <Tooltip title={t('Click to logged out')}>
            <IconButton
              onClick={() => logoutHandle()}
              color={'warning'}
              aria-label={t('Click to logged out')}>
              <LogoutIcon/>
            </IconButton>
          </Tooltip>
        :
          <Tooltip title={t('Click to logged out')}>
            <Button
              onClick={() => logoutHandle()}
              variant={'outlined'}
              color={'warning'}
              startIcon={<LogoutIcon />}
              aria-label={t('Click to logged out')}>
              {t('Click to logged out')}
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