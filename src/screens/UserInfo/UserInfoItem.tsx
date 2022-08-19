import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  userInfoItemName: {
    fontWeight: '700 !important',
  },
}));

const UserInfoItem: FC<Prop> = (prop: Prop): ReactElement => {
  const classes = useStyles();
  const { propName, propValue } = prop;

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-start'}>
      <Typography variant={'body1'} className={classes.userInfoItemName}>
        {propName}
      </Typography>

      <Typography variant={'body1'}>
        {
          propValue ? propValue : '-'
        }
      </Typography>
    </Stack>
  );
};

export default UserInfoItem;

interface Prop {
  propName: string;
  propValue?: string;
}
