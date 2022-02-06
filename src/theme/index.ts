import { createTheme, Theme } from '@mui/material';

const theme: Theme = createTheme({
  typography: {
    fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#009999',
      light: '#5CCCCC',
      dark: '#1D7373',
    },
    secondary: {
      main: '#FF9640',
      dark: '#FF7400',
    },
    background: {
      default: '#fff',
      paper: '#5CCCCC',
    },
    error: {
      main: '#FF5300',
    },
    text: {
      primary: '#0D0C0E',
      secondary: '#fff',
    },
  },
  spacing: 8,
  // overrides: {
  //   ...MuiStyles,
  // },
});

export default theme;
