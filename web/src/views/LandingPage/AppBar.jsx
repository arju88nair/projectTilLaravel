import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Divider} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color:"black",
        fontWeight:"bold"
    },
    appBar: {
        background: 'var(--color-topBar)',
    },
}));

export function LandingAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.appBar}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Shelved
                    </Typography>
                    <Button >How it works</Button>
                    <Button >Resources</Button>
                    <Divider orientation="vertical" flexItem />
                    <Button>Sign Up</Button>
                    <Button >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
