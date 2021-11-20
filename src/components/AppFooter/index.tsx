import React, {FC, ReactElement} from 'react';
import { Grid } from '@mui/material';
// import {createUseStyles} from 'react-jss';

// const useStyles = createUseStyles((theme: ITheme) => ({}));

const AppFooter: FC = (): ReactElement => {
  // const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item>
        AppFooter
      </Grid>
    </Grid>
  );
};

export default AppFooter;
