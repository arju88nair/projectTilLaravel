import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { userActions } from '../../_actions';
import {RegisterPage} from "../RegisterPage"

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
        <div className={classes.root}>
            <Grid container >
                <Grid item xs={12} sm={4}   container
                      direction="row"
                      justify="center"
                      alignItems="flex-start" className={classes.left}  style = {{minHeight: "100vh"}}>
                    <Grid item xs={12} container direction="column"
                          justify="space-around"
                          alignItems="center" style = {{maxHeight: "100vh" }}>
                        <RegisterPage/>
                    </Grid>
                </Grid>

                <Grid xs={0 } item sm={8} only ='sm' style = {{minHeight: "100vh" ,background : 'linear-gradient(to top, #b761dc, #af5bd3, #a756ca, #a050c2, #984bb9, #9345b4, #8e3fb0, #8939ab, #8530a9, #8027a7, #7c1ca5, #770ea3)'}}>
                </Grid>
            </Grid>
        </div>
    );
}
export { LoginPage };