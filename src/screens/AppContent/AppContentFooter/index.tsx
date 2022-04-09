import React, { FC, ReactElement } from 'react';
import {Button, Stack, Theme, Tooltip} from '@mui/material';
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
      <Tooltip title={'Check all items'}>
        <span>
          <Button
            variant={'outlined'}
            color={'primary'}
            startIcon={<CheckBoxIcon />}>
            Check all items
          </Button>
        </span>
      </Tooltip>

      <Tooltip title={'Delete all items'}>
        <span>
          <Button
            variant={'outlined'}
            color={'error'}
            startIcon={<DeleteForeverIcon />}>
            Delete all items
          </Button>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default AppContentFooter;
