import React, { FC, ReactElement } from 'react';
import { IconButton, Stack, Theme, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { makeStyles } from '@mui/styles';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';

const useStyles = makeStyles((theme: Theme) => ({
  modalHeader: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const AppModalHeader: FC<IAppModalHeaderProps> = ({headerText, visibilityHandlers}): ReactElement => {
  const classes = useStyles();

  const closeModalHandler = () => {
    visibilityHandlers.setModalVisibility(false);
  };

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} className={classes.modalHeader}>
      <Typography variant={'h6'}>
        {headerText}
      </Typography>

      <IconButton onClick={() => closeModalHandler()} title={'Close modal'} edge="end" aria-label="close modal">
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
  );
};

export default AppModalHeader;

interface IAppModalHeaderProps {
  headerText: string,
  visibilityHandlers: IUseModalVisibility,
}
