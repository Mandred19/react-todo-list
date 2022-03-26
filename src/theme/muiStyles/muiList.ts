import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';

export const muiList: Components<Theme> = {
  MuiList: {
    styleOverrides: {
      root: {
        overflowY: 'auto',
      },
    },
  },
};
