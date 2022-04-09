import {grey, orange, red, teal} from '@mui/material/colors';

const muiPalette = {
  primary: {
    main: teal[600],
    light: teal[400],
    dark: teal[700],
  },
  secondary: {
    main: orange[600],
    dark: orange[900],
  },
  background: {
    default: grey[50],
    paper: teal[300],
  },
  error: {
    main: red[600],
  },
  text: {
    primary: grey[800],
    secondary: grey[50],
  },
};

export default muiPalette;
