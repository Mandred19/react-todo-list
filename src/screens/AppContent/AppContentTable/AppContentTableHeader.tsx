import React, {FC, ReactElement} from 'react';
import { alpha } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Toolbar from '@mui/material/Toolbar';

const AppContentTableHeader: FC<IEnhancedTableToolbarProps> = (props: IEnhancedTableToolbarProps): ReactElement => {
  const {numSelected} = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        })
      }}>

      <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'end'} width={'100%'}>
        {numSelected > 0 && (
          <Typography
            color="inherit"
            variant="subtitle1"
            style={{ marginRight: 'auto' }}>
            {numSelected} selected
          </Typography>
        )}

        <Tooltip title="Delete selected">
          <span>
            <Button
              variant={'outlined'}
              color={'error'}
              disabled={!numSelected}
              startIcon={<DeleteOutlineOutlinedIcon />}>
              Delete selected
            </Button>
          </span>
        </Tooltip>
      </Stack>
    </Toolbar>
  );
};

export default AppContentTableHeader;

interface IEnhancedTableToolbarProps {
  numSelected: number;
}
