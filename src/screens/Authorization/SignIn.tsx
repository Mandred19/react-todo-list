import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';

const SignIn: FC = (): ReactElement => {
  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      <Typography variant={'body1'}>
        SignIn FORM
      </Typography>
    </Stack>
  );
};

export default SignIn;