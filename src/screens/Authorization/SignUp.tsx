import React, { FC, ReactElement } from 'react';
import { Stack, Typography } from '@mui/material';

const SignUp: FC = (): ReactElement => {
  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      <Typography variant={'body1'}>
        SignUp FORM
      </Typography>
    </Stack>
  );
};

export default SignUp;