import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './views/home/Main';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {Provider} from 'react-redux'
import store from './redux/store'

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Camphor', 'Open Sans', 'Segoe UI', 'sans-serif'
        ].join(','),
        fontSize: 14,
    }
});
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Main/>
        </ThemeProvider></Provider>
    , document.getElementById('root'));


