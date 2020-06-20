import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './app';
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// import RalewayWoff2 from "resources/fonts/Raleway-VariableFont_wght.ttf";
const font = "'Lato', sans-serif";

// const raleway = {
//     fontFamily: 'Raleway',
//     fontStyle: 'normal',
//     fontDisplay: 'swap',
//     fontWeight: 400,
//     src: `
//     local('Raleway'),
//     local('Raleway-Regular'),
//     url(${RalewayWoff2}) format('woff2')
//   `,
// };

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('app')
);


const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});