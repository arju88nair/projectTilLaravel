    import React from 'react';
    import {makeStyles} from '@material-ui/core/styles';
    import Paper from '@material-ui/core/Paper';
    import Grid from '@material-ui/core/Grid';
    import Avatar from '@material-ui/core/Avatar';
    import Typography from "@material-ui/core/Typography";
    import Divider from "@material-ui/core/Divider";
    import ListItemText from "@material-ui/core/ListItemText";
    import List from "@material-ui/core/List";
    import ListItem from "@material-ui/core/ListItem";
    import Link from "@material-ui/core/Link";


    const useStyles = makeStyles(theme => ({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minHeight: '100vh',
            maxHeight: '100%'
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        trendingTopics: {
            marginTop: 20
        }
    }));

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    export function RightPane() {
        const classes = useStyles();

        return (
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center" className={classes.root} xs={12} sm={12}>
                        <div>
                            <Avatar alt="Remy Sharp"
                                    src="https://i.pinimg.com/originals/69/39/82/69398276ba66202f7b83b12e56501ac8.jpg"
                                    className={classes.large}/>
                            <Typography variant="subtitle2" display="block" gutterBottom>
                                daniala@til
                            </Typography>
                        </div>
                        <Divider style={{color: 'black', width: '100%'}}/>
                        <div>
                            <Typography variant="h6" gutterBottom>
                                Trending Bits
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    New
                                </Link>
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    Newadsda
                                </Link>
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    New
                                </Link>
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    Newadsda
                                </Link>
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    New
                                </Link>
                            </Typography>
                            <Typography className={classes.trendingTopics}>
                                <Link href="#">
                                    Newadsda
                                </Link>
                            </Typography>
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        );
    };