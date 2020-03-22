import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {HomeList} from "./HomeList";
import Skeleton from '@material-ui/lab/Skeleton';

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
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
    }, []); // here


    return (
        <Grid item xs={9}>

            <Paper className={classes.paper}>
                {
                    isLoaded ?
                        <HomeList/>
                        :
                        <div className={classes.root}>
                            <Skeleton/>
                            <Skeleton animation={false}/>
                            <Skeleton animation="wave"/>
                        </div>
                }
            </Paper>
        </Grid>
    );
};