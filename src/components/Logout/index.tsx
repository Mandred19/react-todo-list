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
          <Tooltip title={t('common_logout_button_title')}>
            <IconButton
              onClick={() => logoutHandle()}
              color={'warning'}
              aria-label={t('common_logout_button_title')}>
              <LogoutIcon/>
            </IconButton>
          </Tooltip>
        :
          <Tooltip title={t('common_logout_button_title')}>
            <Button
              onClick={() => logoutHandle()}
              variant={'outlined'}
              color={'warning'}
              startIcon={<LogoutIcon />}
              aria-label={t('common_logout_button_title')}>
              {t('common_logout_li')}
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