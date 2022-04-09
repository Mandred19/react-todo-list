import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const muiInput: Components<Theme> = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: grey[500],
      },
    },
  },
};
