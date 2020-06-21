import React, {useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {history} from '../_helpers';
import {alertActions, miscActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../views/HomePage';
import {LandingPage} from '../views/LandingPage';
import {LoginPage} from '../views/LoginPage';
import {RegisterPage} from '../views/RegisterPage';
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root:{}

}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function App() {
    const classes = useStyles();
    const open = useSelector(state => state.misc.spinner);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    const handleBackClose = (event, reason) => {
        dispatch(miscActions.closeSpinner(false))
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(alertActions.clear());
    };

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div>
            <Backdrop className={classes.backdrop} open={open} onClick={handleBackClose}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alert.type}>
                    {alert.message}
                </Alert>
            </Snackbar>
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/landing" component={LandingPage}/>
                    <Route path="/home" component={HomePage}/>
                    <Redirect from="*" to="/"/>
                </Switch>
            </Router>
        </div>
    );
}

