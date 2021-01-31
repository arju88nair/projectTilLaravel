import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {PreAppBar} from "../Components/PreAppBar";
import {LoginForm} from "./LoginForm";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


export  function LoginPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PreAppBar/>
            <LoginForm/>
        </div>
    );
}
