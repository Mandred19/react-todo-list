import React, {FC, ReactElement} from 'react';
import { Stack, Typography } from '@mui/material';

const AppHeader: FC = (): ReactElement => {
  return (
    <Stack direction={'row'} spacing={2} className={'appHeader'}>
      <Typography variant={'h4'}>
        TO-DO list
      </Typography>
    </Stack>
  );
};

export default AppHeader;
