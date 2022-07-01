import React, { ChangeEvent, MouseEvent, FC, ReactElement, useState } from 'react';
import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, Theme, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin, breakpointMixin, flexLayoutMixin } from '../../styles/mixins';

const useStyles = makeStyles((theme: Theme) => ({
  formWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    maxWidth: 320,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
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

const SignIn: FC = (): ReactElement => {
  const classes = useStyles();
  const [values, setValues] = useState<State>({
    login: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: any) => {
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
        <Typography variant={'h4'}>Sign In</Typography>

        <Box component={'form'} onSubmit={handleSubmit} className={classes.inputsWrapper}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="login-input">
              Login
            </InputLabel>

            <OutlinedInput
              id="login-input"
              type={'text'}
              value={values.login}
              onChange={handleChange('login')}
              fullWidth
              autoFocus
              label={'Login'}/>
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
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" underline={'hover'}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to={'/sign-up'} variant="body2" underline={'hover'}>
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignIn;

interface State {
  login: string;
  password: string;
  showPassword: boolean;
}