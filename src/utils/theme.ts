import { createTheme } from '@mui/material/styles';

export const ICON_SIZES = {
  xs: '18px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '32px'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9d2449',
    },
    secondary: {
      main: '#C9AA7C'
    },
    background: {
      default: '#fff',
    },
    common: {
      black: '#333333'
    },
    text: {
      primary: '#333333'
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-sefrif'
    ].join(','),
    fontWeightBold: 600,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: 32,
      fontWeight: 600
    },
    h2: {
      fontSize: 28,
      fontWeight: 600
    },
    h3: {
      fontSize: 26,
      fontWeight: 600
    },
    h4: {
      fontSize: 24,
      fontWeight: 500
    },
    h5: {
      fontSize: 22,
      fontWeight: 500
    },
    h6: {
      fontSize: 20,
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          boxShadow: '0px 3px 1px -2px rgb(157 36 73 / 20%), 0px 2px 2px 0px rgb(157 36 73 / 14%), 0px 1px 5px 0px rgb(157 36 73 / 12%)',
          '&:hover': {
            boxShadow: '0px 3px 1px -2px rgb(157 36 73 / 20%), 0px 2px 2px 0px rgb(157 36 73 / 14%), 0px 1px 5px 0px rgb(157 36 73 / 12%)',
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 5px 10px rgba(203, 203, 203, 0.2)'
        },
        elevation2: {
          boxShadow: '0px 5px 10px rgba(203, 203, 203, 0.25)',
        },
        elevation3: {
          boxShadow: '0px 5px 15px rgba(203, 203, 203, 0.3)',
        },
        elevation4: {
          boxShadow: '0px 5px 20px rgba(203, 203, 203, 0.3)',
        },
        elevation5: {
          boxShadow: '0px 5px 20px rgba(203, 203, 203, 0.35)',
        },
        elevation6: {
          boxShadow: '0px 8px 25px rgba(203, 203, 203, 0.35)',
        },
        elevation7: {
          boxShadow: '0px 8px 25px rgba(203, 203, 203, 0.4)',
        },
        elevation8: {
          boxShadow: '0px 12px 30px rgba(203, 203, 203, 0.4)',
        },
        elevation9: {
          boxShadow: '0px 12px 30px rgba(203, 203, 203, 0.45)',
        },
        elevation10: {
          boxShadow: '0px 15px 35px rgba(203, 203, 203, 0.45)',
        }
      }
    }
  },
  shadows: [
    'none',
    '0px 5px 10px rgba(203, 203, 203, 0.2)',
    '0px 5px 10px rgba(203, 203, 203, 0.25)',
    '0px 5px 15px rgba(203, 203, 203, 0.3)',
    '0px 5px 20px rgba(203, 203, 203, 0.3)',
    '0px 5px 20px rgba(203, 203, 203, 0.35)',
    '0px 8px 25px rgba(203, 203, 203, 0.35)',
    '0px 8px 25px rgba(203, 203, 203, 0.4)',
    '0px 12px 30px rgba(203, 203, 203, 0.4)',
    '0px 12px 30px rgba(203, 203, 203, 0.45)',
    '0px 15px 35px rgba(203, 203, 203, 0.45)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none'
  ]
});


export const colorsStatusIndicator ={
  confirmed: '#4caf50',
  rescheduled: '#ffa000',
  scheduled: '#fbc02d',
  suspended: '#9b9b9b',
  infoDefault: '#1976d2',
  required: '#e5e5e5',
  cancelled: '#c62828',
  inCapture: '#9b9b9b',
  done: '#0288d1'
}