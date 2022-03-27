import { createTheme, Theme } from '@mui/material';
import muiPalette from './muiPalette';
import muiStyles from './muiStyles';

const theme: Theme = createTheme({
  typography: {
    fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Ubuntu', 'Helvetica Neue', 'sans-serif'].join(','),
  },
  palette: {
    ...muiPalette,
    mode: 'light',
  },
  spacing: 8,
  components: {
    ...muiStyles,
  },
});

export default theme;
