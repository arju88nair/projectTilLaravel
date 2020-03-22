import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {HomeList} from "./HomeList";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '100vh'
    },
}));

export function LeftPane() {
    const classes = useStyles();

    return (
        <Grid item xs={9}>
            <Paper className={classes.paper}><HomeList/></Paper>
        </Grid>
    );
};