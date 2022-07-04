import React, { FC, ReactElement, ReactNode } from 'react';
import { FormControl, OutlinedInputProps, TextField } from '@mui/material';
import { BaseTextFieldProps } from '@mui/material/TextField/TextField';

const AuthorizationField: FC<Props> = (props: Props): ReactElement => {
  const {type, label, autoFocus, InputProps, helperText, error, ...rest} = props;
  return (
    <FormControl variant="outlined" fullWidth>
      <TextField
        label={label}
        type={type}
        autoFocus={autoFocus}
        helperText={helperText}
        error={error}
        InputProps={InputProps}
        variant={'outlined'}
        fullWidth
        {...rest}
      />
    </FormControl>
  );
};

export default AuthorizationField;

interface Props extends BaseTextFieldProps {
  helperText: ReactNode;
  error?: boolean;
  InputProps?:  Partial<OutlinedInputProps>;
}