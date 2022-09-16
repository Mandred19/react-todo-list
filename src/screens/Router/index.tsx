import React, { FC, ReactElement, useEffect } from 'react';
import { Container, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { autoLogin } from '../../store/actions/user.action';
import AppHeader from '../../components/AppHeader';
import ProtectedRouter from './ProtectedRouter';
import PublicRouter from './PublicRouter';
import AppBreadcrumbs from '../../components/AppNavigationButtons';
import { useLocation } from 'react-router-dom';
import i18n from 'i18next';

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
  const { pathname } = useLocation();
  const userSlice = useAppSelector((state) => state.userSlice);

  const initApp = async (): Promise<void> => {
    await dispatch(autoLogin());

    await i18n.changeLanguage(userSlice.appLang);
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <Stack direction={'column'} className={classes.appWrapper}>
      {
        userSlice.isAuth && <AppHeader/>
      }

      {
        userSlice.isAuth && pathname !== '/list' && <AppBreadcrumbs/>
      }

      <Container maxWidth={'xl'} className={classes.container}>
        {
          userSlice.isAuth ? <ProtectedRouter/> : <PublicRouter/>
        }
      </Container>
    </Stack>
  );
};

export default Router;
