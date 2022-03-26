import React, { FC, ReactElement } from 'react';
import { Stack, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  appContentFooter: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const AppContentFooter: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} className={classes.appContentFooter}>
      AppContentFooter
    </Stack>
  );
};

export default AppContentFooter;
