import React, {FC, ReactElement} from 'react';
import { Grid } from '@mui/material';

const AppFooter: FC = (): ReactElement => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        AppFooter
      </Grid>
    </Grid>
  );
};

export default AppFooter;
