import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { userActions } from '../../_actions';
import {RegisterPage} from "../RegisterPage"
import bg from "../../resources/images/bg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    left:{
        height: '100vh'
    },
    container:{

    }
}));


function LoginPage() {
    const classes = useStyles();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
            <Grid container  style = {{minHeight: "100vh",backgroundImage:`url(${bg})` }}>
                <Grid item xs={12} sm={5}  container
                      direction="column"
                      justify="center"
                      alignItems="flex-start" className={classes.left}  >
                    <RegisterPage/>
                </Grid>

                <Grid xs={0 } item sm={7} only ='sm' style = {{minHeight: "100vh" }}>
                </Grid>
            </Grid>
    );
}
export { LoginPage };