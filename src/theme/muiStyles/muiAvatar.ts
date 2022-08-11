import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';

export const muiAvatar: Components<Theme> = {
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: 40,
        height: 40,
      },
    },
  },
};
