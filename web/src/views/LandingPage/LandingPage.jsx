import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {PreAppBar} from "../Components/PreAppBar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


export  function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <PreAppBar/>
        </div>
    );
}
