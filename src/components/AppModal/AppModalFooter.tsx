import React, { FC, ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Stack, Theme } from '@mui/material';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';

const useStyles = makeStyles((theme: Theme) => ({
  modalFooter: {
    padding: theme.spacing(2),
  },
}));

const AppModalFooter: FC<IAppModalFooterProps> = (props): ReactElement => {
  const classes = useStyles();
  const {footerSubmitButtonText, footerCancelButtonText, visibilityHandlers, submitHandler, isPending} = props;

  const closeModalHandler = () => {
    visibilityHandlers.setModalVisibility(false);
  };

  const submitModalHandler = async (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    await submitHandler();
    await closeModalHandler();
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
        onClick={(e) => submitModalHandler(e)}
        variant={'outlined'}
        title={footerSubmitButtonText}
        disabled={isPending}
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
  submitHandler: () => Promise<void>,
  isPending: boolean,
}
