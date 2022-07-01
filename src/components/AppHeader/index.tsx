import React, {FC, ReactElement} from 'react';
import { Container, Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  appHeaderWrapper: {
    boxShadow: '0px 5px 5px -3px rgb(0 0 0 / 20%)',
  },
  appHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const AppHeader: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Stack className={classes.appHeaderWrapper}>
      <Container maxWidth={'xl'}>
        <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} className={classes.appHeader}>
          <Typography variant={'h4'}>
            TODO list
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AppHeader;
