import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from "../../resources/images/main.png";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 180,

    },
    logoDiv: {
        display: "grid",
        alignContent: "center"
    },
    MuiButtonRoot: {
        fontWeight: "600"
    }
}));


export function PreAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" style={{background: '#fefef9'}}>
            <Toolbar>
                <Grid
                    justify="space-between" // Add it here :)
                    container
                >
                    <Grid item className={classes.logoDiv}>
                        <img src={logo} alt="logo" className={classes.logo}/>
                    </Grid>

                    <Grid item className={classes.logoDiv}>
                        <div>
                            <Button   style={{fontFamily: "Montserrat", fontWeight: "600"}}>
                                Feed
                            </Button>
                            <Button   href="/register" style={{fontFamily: "Montserrat", fontWeight: "600"}}>
                                Create an account
                            </Button>
                            <Button   href="/login" style={{fontFamily: "Montserrat", fontWeight: "600"}}>
                                Sign In
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
