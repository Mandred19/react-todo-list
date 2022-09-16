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
        {isSignInRoute ? t('authorization_sign_in_button', { ns: 'authorization' }) : t('authorization_sign_up_button', { ns: 'authorization' })}
      </Button>

      <Grid container justifyContent={isSignInRoute ? 'space-between' : 'flex-end'}>
        {isSignInRoute && (
          <Grid item xs>
            <Link variant="body2" underline={'hover'}>
              { t('authorization_forgot_password_p', { ns: 'authorization' })}
            </Link>
          </Grid>
        )}

        <Grid item>
          <Link component={RouterLink} to={isSignInRoute ? '/sign-up' : '/sign-in'} variant="body2" underline={'hover'}>
            {isSignInRoute ? t('authorization_without_akk_p', { ns: 'authorization'}) : t('authorization_already_have_akk_p', { ns: 'authorization'})}
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
