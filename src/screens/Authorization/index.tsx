import React, { FC, ReactElement } from 'react';
import {
  Box,
  Stack,
  Theme,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin, breakpointMixin, flexLayoutMixin } from '../../styles/mixins';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useAuthRouteCondition } from './useAuthRouteCondition';
import { APP_NAME } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  formWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    maxWidth: 320,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%)',
    ...flexLayoutMixin('center', 'center'),
    ...betweenChildrenMixin({
      marginBottom: theme.spacing(2),
    }),
    ...breakpointMixin(768, 0, {
      padding: theme.spacing(3),
      maxWidth: 500,
    }),
  },
}));

const Authorization: FC = (): ReactElement => {
  const { t } = useTranslation(['authorization']);
  const classes = useStyles();
  const isSignInRoute = useAuthRouteCondition();

  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      <Box className={classes.formWrapper}>
        <Typography variant={'h4'}>{APP_NAME}</Typography>

        <Typography variant={'h5'}>
          {isSignInRoute ? t('Sign in', { ns: 'authorization' }) : t('Sign up', { ns: 'authorization' })}
        </Typography>

        {
          isSignInRoute ? <SignIn/> : <SignUp/>
        }
      </Box>
    </Stack>
  );
};

export default Authorization;