import React from 'react';
import './Main.css';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {Navbar} from "./Navbar";
import {LeftPane} from "./LeftPane";
import {RightPane} from "./RightPane";
import {AlertDialogSlide} from "./SignUp";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding:20
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
<AlertDialogSlide/>
                <Navbar/>
                <LeftPane/>
                <RightPane/>
            </Grid>
        </div>
    );
};