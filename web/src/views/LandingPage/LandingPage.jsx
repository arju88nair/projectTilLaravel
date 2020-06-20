import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../../resources/images/main.png";
import logo1 from "../../resources/images/nyt-logo.svg";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";


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
        // marginRight: theme.spacing(2),

    },
    logoDiv: {
        // maxWidth: 200,
        // marginRight: theme.spacing(2),
        display:"grid",
        alignContent:"center"
    },
    MuiButtonRoot:{
       fontWeight:"600"
}
}));


export  function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#fefef9' }}>
                <Toolbar>
                    <Grid
                        justify="space-between" // Add it here :)
                        container
                        spacing={24}
                    >
                        <Grid item className={classes.logoDiv} >
                            <img src={logo} alt="logo" className={classes.logo} />
                        </Grid>

                        <Grid item className={classes.logoDiv}>
                            <div >
                                <Button raised color="accent" style={{fontFamily:"Montserrat",fontWeight:"600"}}>
                                    Feed
                                </Button>
                                <Button raised color="accent" href="/register">
                                    Create an account
                                </Button>
                                <Button raised color="accent" href="/login">
                                    Sign In
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
