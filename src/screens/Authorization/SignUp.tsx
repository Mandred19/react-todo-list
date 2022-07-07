import React, { FC, ReactElement, useState } from 'react';
import { object, string } from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import AuthorizationForm from './AuthorizationForm';
import AuthorizationField from './AuthorizationField';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthorizationControls from './AuthorizationControls';
import { useAuthRouteCondition } from './useAuthRouteCondition';

const initialValues: InitialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = object().shape({
  name: string().required('Name is required').min(3, 'Min length error').max(25, 'Max length error'),
  email: string().required('Email is required').email('Invalid email value').min(3, 'Min length error').max(255, 'Max length error'),
  password: string().required('Password is required').min(8, 'Min length error').max(36, 'Max length error'),
});

const SignUp: FC = (): ReactElement => {
  const [stateValues, setStateValues] = useState<State>({
    showPassword: false,
  });
  const isSignInRoute = useAuthRouteCondition();

  const handleShowPassword = () => {
    setStateValues({ ...stateValues, showPassword: !stateValues.showPassword });
  };

  const handleSubmit = async (values: InitialValues, formikHelpers: FormikHelpers<InitialValues>): Promise<void> => {
    console.warn(values);
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
    <AuthorizationForm submitHandler={formik.handleSubmit}>
      <AuthorizationField
      label={'Name'}
      type={'text'}
      autoFocus={true}
      helperText={touched.name && dirty && errors.name}
      error={touched.name && dirty && Boolean(errors.name)}
      {...getFieldProps('name')}/>

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

      <AuthorizationControls/>
    </AuthorizationForm>
  );
};

export default SignUp;

interface InitialValues {
  name: string,
  email: string;
  password: string;
}

interface State {
  showPassword: boolean;
}
