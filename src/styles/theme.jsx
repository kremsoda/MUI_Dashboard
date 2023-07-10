import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ccd5ae',
        },
        secondary: {
            main: '#eee'
        }
    },
    breakpoints: {
        values: {
            xs: 320,
            sm: 450,
            md: 768,
            lg: 1200,
            xl: 1920,
        }
    },
    typography: {
        fontFamily: 'Arial, sans-serif'
    }
});

export default theme;