import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {LandingAppBar} from './AppBar';
import {HeroBanner} from './Banner'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <LandingAppBar/>
            <HeroBanner/>
        </div>
    );
}
