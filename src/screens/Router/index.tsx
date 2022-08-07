import React, { FC, ReactElement, useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { autoLogin } from '../../store/actions/user.action';
import AppHeader from '../../components/AppHeader';
import ProtectedRouter from './ProtectedRouter';
import PublicRouter from './PublicRouter';

const useStyles = makeStyles({
  appWrapper: {
    backgroundColor: '#eee',
    overflow: 'hidden',
    height: '100%',
  },
  container: {
    overflow: 'hidden',
    height: '100%',
  },
});

const Router: FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(autoLogin());

    if (isAuth) {
      navigate('list');
    }
  }, []);

  return (
    <Stack direction={'column'} className={classes.appWrapper}>
      {
        isAuth && <AppHeader/>
      }

      <Container maxWidth={'xl'} className={classes.container}>
        {
          isAuth ? <ProtectedRouter/> : <PublicRouter/>
        }
      </Container>
    </Stack>
  );
};

export default Router;
