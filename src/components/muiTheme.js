import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const dark = '#4F4F4F';
const blue = '#4EB7F5';
const mainBlue = '#4285F4';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: dark,
      blue,
      mainBlue,
    },

    action: {
      disabledBackground: grey[300],
      disabled: dark,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          fontSize: '3rem',
          padding: '5rem 3rem',
          boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.30)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          '& .MuiDivider-wrapper': {
            fontSize: '1.3rem',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiInput-root:before': {
            border: 0,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            fontSize: '2rem',
            borderColor: dark,
            background: 'transparent',
            autoComplete: 'off',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            fontSize: '2rem',
            color: dark,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          borderRadius: 0,
        },
      },
    },
    'MuiButtonGroup-groupedOutlined': {
      styleOverrides: {
        root: {
          fontSize: '1.5rem',
          fontFamily: 'inherit',
          borderRadius: 0,
        },
      },
    },
  },
  typography: {
    fontFamily: ['Madefor', 'Madefor medium', 'Roboto', 'sans-serif'].join(','),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: '3rem',
      color: dark,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      color: dark,
      fontWeight: 600,
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.85rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },

    body1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: 1.7,
      color: dark,
    },
    body2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.85,
    },
  },
});
