import React, { FC, ReactElement } from 'react';
import { Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthRouteCondition } from './useAuthRouteCondition';
import { useTranslation } from 'react-i18next';

const AuthorizationControls: FC<Props> = (props: Props): ReactElement => {
  const { t } = useTranslation(['authorization']);
  const isSignInRoute = useAuthRouteCondition();
  const { isFetching } = props;

  return (
    <>
      <Button type={'submit'} fullWidth variant={'contained'} size={'large'} color={'primary'} disabled={isFetching}>
        {isSignInRoute ? t('Sign in', { ns: 'authorization' }) : t('Sign up', { ns: 'authorization' })}
      </Button>

      <Grid container justifyContent={isSignInRoute ? 'space-between' : 'flex-end'}>
        {isSignInRoute && (
          <Grid item xs>
            <Link variant="body2" underline={'hover'}>
              { t('Forgot password', { ns: 'authorization' })}
            </Link>
          </Grid>
        )}

        <Grid item>
          <Link component={RouterLink} to={isSignInRoute ? '/sign-up' : '/sign-in'} variant="body2" underline={'hover'}>
            {isSignInRoute ? t('Don\'t have an account? Sign up', { ns: 'authorization'}) : t('Already have an account? Sign in', { ns: 'authorization'})}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthorizationControls;

interface Props {
  isFetching: boolean;
}
