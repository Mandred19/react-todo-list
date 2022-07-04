import React, { FC, ReactElement } from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { betweenChildrenMixin } from '../../styles/mixins';

const useStyles = makeStyles((theme: Theme) => ({
  inputsWrapper: {
    ...betweenChildrenMixin({
      marginBottom: theme.spacing(2),
    }),
  },
}));

const AuthorizationForm: FC<Props> = (props: Props): ReactElement => {
  const { children, submitHandler } = props;
  const classes = useStyles();

  return (
    <Box component={'form'} onSubmit={submitHandler} className={classes.inputsWrapper}>
      {children}
    </Box>
  );
};

export default AuthorizationForm;

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  submitHandler: (e?: React.FormEvent<HTMLFormElement>) => void;
}