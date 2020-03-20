import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    rightpane: {
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function RightPane() {
    const classes = useStyles();

    return (
        <Grid item xs={4}>
            <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
    );
};