import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { responsiveFontSizes } from '@mui/material';

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#0a68ff',
    },
    secondary: {
      light: '#EDF7FA',
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          '& *::-webkit-scrollbar': {
            borderRadius: 0,
            width: '8px',
          },
          '& *::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: 'rgba(22, 24, 35, 0.16)',
          },
          '& *::-webkit-scrollbar-track': {
            borderRadius: 0,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          },
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: 680,
          '@media (min-width: 600px)': {
            maxWidth: 680,
          },
        },
        maxWidthMd: {
          maxWidth: 860,
          '@media (min-width: 900px)': {
            maxWidth: 860,
          },
        },
        maxWidthLg: {
          maxWidth: 1280,
          '@media (min-width: 1200px)': {
            maxWidth: 1280,
          },
        },
        maxWidthXl: {
          maxWidth: 1440,
          '@media (min-width: 1441px)': {
            maxWidth: 1440,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover ,&.active': {
            color: '#FF6464',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 1,
          '&:hover': { cursor: 'pointer' },
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            color: 'white',
            backgroundColor: '#142840',
          },
        },
      ],
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Heebo, sans-serif',
  },
});

theme = responsiveFontSizes(theme);
