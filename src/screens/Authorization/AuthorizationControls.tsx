import React, { FC, ReactElement } from 'react';
import { Button, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuthRouteCondition } from './useAuthRouteCondition';

const AuthorizationControls: FC<Props> = (props: Props): ReactElement => {
  const isSignInRoute = useAuthRouteCondition();
  const { isFetching } = props;

  return (
    <>
      <Button type={'submit'} fullWidth variant={'contained'} size={'large'} color={'primary'} disabled={isFetching}>
        {isSignInRoute ? 'Sign In' : 'Sign Up'}
      </Button>

      <Grid container justifyContent={isSignInRoute ? 'space-between' : 'flex-end'}>
        {isSignInRoute && (
          <Grid item xs>
            <Link variant="body2" underline={'hover'}>
              Forgot password?
            </Link>
          </Grid>
        )}

        <Grid item>
          <Link component={RouterLink} to={isSignInRoute ? '/sign-up' : '/sign-in'} variant="body2" underline={'hover'}>
            {isSignInRoute ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign in'}
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
