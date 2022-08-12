import React, { FC, ReactElement } from 'react';
import { CircularProgress, Stack } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress/CircularProgress';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  appScreenPreloaderWrapper: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
}));

const AppScreenPreloader: FC<CircularProgressProps> = (props): ReactElement => {
  const classes = useStyles();

  const defaultProps: CircularProgressProps = {
    color: 'primary',
    size: 80,
    thickness: 2,
  };

  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} className={classes.appScreenPreloaderWrapper}>
      <CircularProgress {...defaultProps} {...props}/>
    </Stack>
  );
};

export default AppScreenPreloader;
