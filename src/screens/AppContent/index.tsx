import React, {FC, ReactElement} from 'react';
import { Stack } from '@mui/material';
import AppContentHeader from './AppContentHeader';
import AppContentList from './AppContentList';

const AppContent: FC = (): ReactElement => {
  return (
    <Stack direction={'column'} spacing={2}>
      <AppContentHeader />

      <AppContentList />
    </Stack>
  );
};

export default AppContent;
