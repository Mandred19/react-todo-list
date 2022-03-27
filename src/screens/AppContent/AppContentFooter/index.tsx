import React, { FC, ReactElement } from 'react';
import { Button, Stack, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const useStyles = makeStyles((theme: Theme) => ({
  appContentFooter: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const AppContentFooter: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} className={classes.appContentFooter}>
      <Button
        variant={'outlined'}
        title={'Check all items'}
        color={'primary'}
        startIcon={<CheckBoxIcon />}>
        Check all items
      </Button>

      <Button
        variant={'outlined'}
        title={'Delete all items'}
        color={'error'}
        startIcon={<DeleteForeverIcon />}>
        Delete all items
      </Button>
    </Stack>
  );
};

export default AppContentFooter;
