import React, { ChangeEvent, FC, FormEvent, MouseEvent, ReactElement, useMemo, useState } from 'react';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, Theme, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin, breakpointMixin, flexLayoutMixin } from '../../styles/mixins';
import { APP_NAME } from '../../utils';

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
  inputsWrapper: {
    ...betweenChildrenMixin({
      marginBottom: theme.spacing(2),
    }),
  },
}));

const Authorization: FC = (): ReactElement => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });
  const isSignInRoute = useMemo(() => pathname === '/sign-in', [pathname]);

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      <Box className={classes.formWrapper}>
        <Typography variant={'h4'}>
          {APP_NAME}
        </Typography>

        <Typography variant={'h5'}>
          {isSignInRoute ? 'Sign In' : 'Sign Up'}
        </Typography>

        <Box component={'form'} onSubmit={handleSubmit} className={classes.inputsWrapper}>
          {
            !isSignInRoute &&
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="name-input">
                Name
              </InputLabel>

              <OutlinedInput
                id="name-input"
                type={'text'}
                value={values.name}
                onChange={handleChange('name')}
                fullWidth
                autoFocus
                label={'Name'}/>
            </FormControl>
          }

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="email-input">
              Email
            </InputLabel>

            <OutlinedInput
              id="email-input"
              type={'email'}
              value={values.email}
              onChange={handleChange('email')}
              fullWidth
              autoFocus={isSignInRoute}
              label={'Email'}/>
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password-input">
              Password
            </InputLabel>

            <OutlinedInput
              id="password-input"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              fullWidth
              label={'Password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }/>
          </FormControl>

          <Button
            type={'submit'}
            fullWidth
            variant={'contained'}
            size={'large'}
            color={'primary'}>
            {isSignInRoute ? 'Sign In' : 'Sign Up'}
          </Button>

          <Grid container justifyContent={isSignInRoute ? 'space-between' : 'flex-end'}>
            {
              isSignInRoute &&
              <Grid item xs>
                <Link variant="body2" underline={'hover'}>
                  Forgot password?
                </Link>
              </Grid>
            }

            <Grid item>
              <Link
                component={RouterLink}
                to={isSignInRoute ? '/sign-up' : '/sign-in'}
                variant="body2"
                underline={'hover'}>
                {isSignInRoute ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign in'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default Authorization;

interface State {
  name: string,
  email: string;
  password: string;
  showPassword: boolean;
}