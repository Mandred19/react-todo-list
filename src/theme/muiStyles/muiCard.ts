import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material';
import {grey} from '@mui/material/colors';

export const muiCard: Components<Theme> = {
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: grey[50],
      },
    },
  },
  MuiCardHeader: {
    styleOverrides :{
      content: {
        overflow: 'hidden',
      },
    },
  },
};
