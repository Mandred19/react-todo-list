import React, { FC, ReactElement } from 'react';
import { Button, Stack, Theme, Tooltip, Typography } from '@mui/material';
import AppAvatar from '../../AppAvatar';
import { useAppSelector } from '../../../store/hooks';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  userInfoButtonData: {
    marginRight: theme.spacing(2),
  },
}));

const UserInfoButton: FC = (): ReactElement => {
  const classes = useStyles();
  const {user} = useAppSelector((state) => state.userSlice);
  const navigate = useNavigate();

  const {name, avatar} = user;

  return (
    <Tooltip title={'User info'}>
      <Button
        onClick={() => navigate('user-info')}
        variant={'text'}
        color={'primary'}
        aria-label={'User info'}>
        <Stack direction={'column'} spacing={2} alignItems={'center'} justifyContent={'start'} className={classes.userInfoButtonData}>
          <Typography variant={'subtitle2'}>
            {name}
          </Typography>
        </Stack>

        <AppAvatar src={avatar} alt={name} user={user}/>
      </Button>
    </Tooltip>
  );
};

export default UserInfoButton;