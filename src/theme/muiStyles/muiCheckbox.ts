import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';

export const muiCheckbox: Components<Theme> = {
  MuiCheckbox: {
    styleOverrides: {
      colorPrimary: {
        color: '#009999',
      },
    },
  },
};
