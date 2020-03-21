import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme => ({
    leftpane: {},
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
    count:{
        marginTop:-10
    }
}));

export function LeftPane() {
    const classes = useStyles();

    return (
        <Grid item xs={9}>
            <Paper className={classes.paper}>
            <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Box display="flex" flexDirection="column" p={1} m={1}  justify="center"
                                 alignItems="center">
                                <Box p={1}  >
                                    <ArrowDropUpIcon />
                                </Box>
                                <Box p={1}  className={classes.count}>
                                    345
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start" spacing={2}>
                                <Grid item xs  container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start">
                                    <Typography gutterBottom variant="subtitle1">
                                        If, like me, you’ve read the Redux docs, watched Dan’s videos, done Wes’ course and still not quite grasped how to use Redux,
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        If you don’t know what Thunk is, don’t worry too much, but we’ll use it to make asynchronous calls in the “Redux way”.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        This tutorial assumes you have a basic grasp of React and ES6/2015, but it should hopefully be easy enough to follow along regardless.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">$19.00</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>
            </Paper>
        </Grid>
    );
};