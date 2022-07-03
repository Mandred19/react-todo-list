import React, { FC, ReactElement, useMemo, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack, TextField,
  Theme,
  Typography
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin, breakpointMixin, flexLayoutMixin } from '../../styles/mixins';
import { APP_NAME } from '../../utils';
import {object, string} from 'yup';
import {FormikHelpers, useFormik} from 'formik';

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

const initialValuesSignIn: InitialValuesSignIn = {
  name: '',
  email: '',
  password: '',
};

// const initialValuesSignUp: InitialValuesSignUp = {
//   name: '',
//   ...initialValuesSignIn,
// };

const validationSchema = object().shape({
  name: string().required('Name is required').min(3, 'Min length error').max(25, 'Max length error'),
  email: string().required('Email is required').email('Invalid email value').min(3, 'Min length error').max(255, 'Max length error'),
  password: string().required('Password is required').min(8, 'Min length error').max(36, 'Max length error'),
});

const Authorization: FC = (): ReactElement => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [stateValues, setStateValues] = useState<State>({
    showPassword: false,
  });
  const isSignInRoute = useMemo(() => pathname === '/sign-in', [pathname]);

  const handleShowPassword = () => {
    setStateValues({ ...stateValues, showPassword: !stateValues.showPassword });
  };

  const handleSubmit = (values: InitialValuesSignIn, formikHelpers: FormikHelpers<InitialValuesSignIn>) => {
    // eslint-disable-next-line no-console
    console.log(values);
    formikHelpers.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialValuesSignIn,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      <Box className={classes.formWrapper}>
        <Typography variant={'h4'}>{APP_NAME}</Typography>

        <Typography variant={'h5'}>{isSignInRoute ? 'Sign In' : 'Sign Up'}</Typography>

        <Box component={'form'} onSubmit={formik.handleSubmit} className={classes.inputsWrapper}>
          {!isSignInRoute && (
            <FormControl variant="outlined" fullWidth>
              <TextField
                type={'text'}
                variant={'outlined'}
                fullWidth
                autoFocus
                label={'Name'}
                helperText={formik.touched.name && formik.errors.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                {...formik.getFieldProps('name')}
              />
            </FormControl>
          )}

          <FormControl variant="outlined" fullWidth>
            <TextField
              type={'email'}
              variant={'outlined'}
              fullWidth
              autoFocus={isSignInRoute}
              label={'Email'}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              {...formik.getFieldProps('email')}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <TextField
              type={stateValues.showPassword ? 'text' : 'password'}
              variant={'outlined'}
              fullWidth
              label={'Password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword}>
                      {stateValues.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={formik.touched.password && formik.errors.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              {...formik.getFieldProps('password')}
            />
          </FormControl>

          <Button type={'submit'} fullWidth variant={'contained'} size={'large'} color={'primary'}>
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
        </Box>
      </Box>
    </Stack>
  );
};

export default Authorization;

interface InitialValuesSignIn {
  name: string,
  email: string;
  password: string;
}

interface InitialValuesSignUp extends InitialValuesSignIn {
  name: string,
}

interface State {
  showPassword: boolean;
}