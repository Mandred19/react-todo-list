import React, { FC, ReactElement } from 'react';
import { Button, Stack, Theme, Tooltip } from '@mui/material';
import AppAvatar from '../../components/AppAvatar';
import { useAppSelector } from '../../store/hooks';
import UserInfoItem from './UserInfoItem';
import { makeStyles } from '@mui/styles';
import Logout from '../../components/Logout';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles((theme: Theme) => ({
  userInfoWrapper: {
    height: '100%',
    padding: theme.spacing(2),
  },
  userInfoItem: {
    height: '100%',
  },
  userInfoAvatar: {
    width: '100px !important',
    height: '100px !important',
  },
}));

const UserInfo: FC = (): ReactElement => {
  const classes = useStyles();
  const {user} = useAppSelector((state) => state.userSlice);

  const {id, name, email, avatar, createdAt, updatedAt} = user;

  const formatDate = (date: string): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour12: false,
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date(date));
  };

  const editHandle = () => {
    // eslint-disable-next-line no-console
    console.log(111);
  };

  return (
    <Stack direction={'row'} spacing={2} flexGrow={1} className={classes.userInfoWrapper}>
      <Stack direction={'column'} spacing={2} flexGrow={1} className={classes.userInfoItem}>
        <AppAvatar src={avatar} alt={name} user={user} className={classes.userInfoAvatar}/>
      </Stack>

      <Stack direction={'column'} spacing={2} flexGrow={1} className={classes.userInfoItem} justifyContent={'space-between'}>
        <Stack direction={'column'} spacing={2} justifyContent={'space-between'}>
          <UserInfoItem propName={'ID:'} propValue={id} />

          <UserInfoItem propName={'User name:'} propValue={name} />

          <UserInfoItem propName={'E-mail:'} propValue={email} />

          <UserInfoItem propName={'Created at:'} propValue={formatDate(createdAt)} />

          <UserInfoItem propName={'Updated at:'} propValue={formatDate(updatedAt)} />

          <Stack flexShrink={0} alignSelf={'flex-start'}>
            <Tooltip title={'Edit'}>
              <Button
                onClick={() => editHandle()}
                variant={'outlined'}
                color={'inherit'}
                startIcon={<EditIcon />}
                aria-label={'Edit'}>
                Edit
              </Button>
            </Tooltip>
          </Stack>
        </Stack>

        <Stack flexShrink={0} alignSelf={'flex-start'}>
          <Logout variant={'textButton'}/>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UserInfo;