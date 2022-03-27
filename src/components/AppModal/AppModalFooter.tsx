import React, { FC, ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Stack, Theme } from '@mui/material';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';

const useStyles = makeStyles((theme: Theme) => ({
  modalFooter: {
    padding: theme.spacing(2),
  },
}));

const AppModalFooter: FC<IAppModalFooterProps> = ({footerSubmitButtonText, footerCancelButtonText, visibilityHandlers}): ReactElement => {
  const classes = useStyles();

  const closeModalHandler = () => {
    visibilityHandlers.setModalVisibility(false);
  };

  const submitModalHandler = () => {
    closeModalHandler();
  };

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'end'} className={classes.modalFooter}>
      <Button
        onClick={() => closeModalHandler()}
        variant={'text'}
        title={footerCancelButtonText}
        color={'secondary'}>
        {footerCancelButtonText}
      </Button>

      <Button
        onClick={() => submitModalHandler()}
        variant={'outlined'}
        title={footerSubmitButtonText}
        color={'primary'}>
        {footerSubmitButtonText}
      </Button>
    </Stack>
  );
};

export default AppModalFooter;

interface IAppModalFooterProps {
  footerSubmitButtonText: string,
  footerCancelButtonText: string,
  visibilityHandlers: IUseModalVisibility,
}
