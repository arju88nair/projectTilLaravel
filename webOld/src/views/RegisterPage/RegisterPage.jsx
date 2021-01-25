import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {PreAppBar} from "../Components/PreAppBar";
import {RegisterForm} from "./RegisterForm";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


export  function RegisterPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PreAppBar/>
            <RegisterForm/>
        </div>
    );
}
