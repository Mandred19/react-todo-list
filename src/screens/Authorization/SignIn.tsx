import React, { FC, ReactElement, useState } from 'react';
import AuthorizationField from './AuthorizationField';
import { IconButton, InputAdornment, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthorizationControls from './AuthorizationControls';
import AuthorizationForm from './AuthorizationForm';
import { FormikHelpers, useFormik } from 'formik';
import { object, string } from 'yup';
import { useAuthRouteCondition } from './useAuthRouteCondition';
import { SignInRequestDto } from '../../store/types/user.types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signIn } from '../../store/actions/user.action';

const initialValues: SignInRequestDto = {
  email: '',
  password: '',
};

const validationSchema = object().shape({
  email: string().required('Email is required').email('Invalid email value').min(3, 'Min length error').max(255, 'Max length error'),
  password: string().required('Password is required').min(8, 'Min length error').max(36, 'Max length error'),
});

const SignIn: FC = (): ReactElement => {
  const [stateValues, setStateValues] = useState<State>({
    showPassword: false,
  });
  const isSignInRoute = useAuthRouteCondition();
  const dispatch = useAppDispatch();
  const { pending: isFetching, error } = useAppSelector((state) => state.userSlice);

  const handleShowPassword = () => {
    setStateValues({ ...stateValues, showPassword: !stateValues.showPassword });
  };

  const handleSubmit = async (values: SignInRequestDto, formikHelpers: FormikHelpers<SignInRequestDto>): Promise<void> => {
    const response = await dispatch(signIn(values));
    // eslint-disable-next-line no-console
    console.log(111, response);
    formikHelpers.setSubmitting(false);
    return Promise.resolve();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
  });
  const { touched, dirty, errors, getFieldProps } = formik;

  return (
    <>
      <AuthorizationForm submitHandler={formik.handleSubmit}>
        <AuthorizationField
          label={'Email'}
          type={'email'}
          autoFocus={isSignInRoute}
          helperText={touched.email && dirty && errors.email}
          error={touched.email && dirty && Boolean(errors.email)}
          {...getFieldProps('email')}/>

        <AuthorizationField
          label={'Password'}
          type={stateValues.showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleShowPassword}>
                  {stateValues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          helperText={touched.password && dirty && errors.password}
          error={touched.password && dirty && Boolean(errors.password)}
          {...getFieldProps('password')}/>

        <AuthorizationControls isFetching={isFetching}/>
      </AuthorizationForm>

      {error && (
        <Typography variant={'body1'} color={'red'}>
          {error}
        </Typography>
      )}
    </>
  );
};

export default SignIn;

interface State {
  showPassword: boolean;
}
