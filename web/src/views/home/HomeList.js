import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    root: {
        flexGrow: 1,
    },
    count: {
        marginTop: -10
    }
}));

export function HomeList() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div className={classes.root}>
                <Grid container spacing={2} xs={12} sm={12}>
                    <Grid item xs={1} sm={1}>
                        <Box display="flex" flexDirection="column" p={1} m={1} justify="center"
                             alignItems="center">
                            <Box p={1}>
                                <ArrowDropUpIcon/>
                            </Box>
                            <Box p={1} className={classes.count}>
                                345
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={11} sm={11} container>
                        <Grid item xs container
                              direction="column"
                              justify="center"
                              alignItems="flex-start" spacing={2} item xs={11} sm={11}>
                            <Grid item xs container
                                  direction="column"
                                  justify="center"
                                  alignItems="flex-start">
                                <Typography gutterBottom style={{
                                    fontSize: '10',
                                    fontWeight: 'medium',
                                    color: '#464855',
                                    fontFamily: "Poppins"
                                }}>
                                    If, like me, you’ve read the Redux docs, watched Dan’s videos, done Wes’ course
                                    and still not quite grasped how to use Redux,
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    added 5 hours ago by lloydyhats in memes
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    284 comments | share | save | hide | report
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} sm={1}   alignItems="flex-end"   style={{marginTop:15}} container
                              direction="column">
                            <LaunchIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Paper>

    );
};