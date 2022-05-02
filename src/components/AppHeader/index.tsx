import React, {FC, ReactElement} from 'react';
import { Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  appHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%)',
  },
}));

const AppHeader: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Stack direction={'row'} spacing={2} className={classes.appHeader}>
      <Typography variant={'h4'}>
        TODO list
      </Typography>
    </Stack>
  );
};

export default AppHeader;
