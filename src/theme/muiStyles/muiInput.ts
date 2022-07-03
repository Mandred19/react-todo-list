import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';
import {red, grey} from '@mui/material/colors';

export const muiInput: Components<Theme> = {
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        error: {
          color: red[100],
        }
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: grey[500],
      },
    },
  },
};
