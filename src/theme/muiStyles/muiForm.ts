import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';
import {grey, red} from '@mui/material/colors';

export const muiForm: Components<Theme> = {
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: grey[500],

        error :{
          color: red[100],
        },
      },
    },
  },
};
