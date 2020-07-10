import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {green} from "@material-ui/core/colors/green";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../_actions/userActions";
import {alertActions, miscActions} from "../../_actions";
import {Link} from 'react-router-dom';

// get our fontawesome imports
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons"
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxHeight: '100vh',
        margin: '10%',
        position: "absolute",
        top: '10%',


        // "MsTransform": "translateY(-50%)",
        // "transform": "translateY(-50%)",


    },
    formDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(8),
        borderRadius: '2%',
        backgroundColor: '#ffffff'

    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(1),
        padding: '3% 10% 3% 10%',
        // marginTop:"-10%"

    },
    socialButton: {
        width: '100%', // Fix IE 11 issue.
        // marginTop: theme.spacing(3),
        padding: '3% 10% 3% 10%',

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loginBay: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export function RegisterForm() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        username:''
    });
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const errorOpen = alert.open
    // // reset login status
    // useEffect(() => {
    //     dispatch(userActions.logout());
    // }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            dispatch(alertActions.clear());
            dispatch(miscActions.openSpinner(true))
            dispatch(userActions.register(user));
        }
    }

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="sm" className={classes.loginBay}>
            <CssBaseline/>
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Create your account
                </Typography>
                <div className={classes.socialButton}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        style={{
                            borderRadius: 25, margin: theme.spacing(1, 0, 1),
                            color: 'black'
                        }}
                        startIcon={<FontAwesomeIcon icon={faGoogle}/>}
                    >
                        Continue with Google
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        style={{
                            borderRadius: 25, margin: theme.spacing(1, 0, 1),
                            color: 'black'
                        }}
                        startIcon={<FontAwesomeIcon icon={faFacebook}/>}
                    >
                        Continue with Facebook
                    </Button>
                </div>
                <Divider style={{backgroundColor: 'gray', width: '80%'}}/>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={user.username}
                                    onChange={handleChange}
                                    type="text"

                                />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    value={user.email}
                                    type="email"
                                />
                        </Grid>
                        <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={user.password}
                                    onChange={handleChange}
                                    inputProps={{minLength: 2}}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="default" required />}
                                label="I agree to the terms and conditions."
                            />
                        </Grid>
                        {errorOpen ? <Grid item xs={12}>
                            <Typography variant="caption" display="block" gutterBottom
                                        style={{color: 'red'}}>
                                {alert.message}
                            </Typography>
                        </Grid> : null}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        style={{borderRadius: 25, backgroundColor: 'black', color: 'white'}}
                    >
                        Register
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}> Already have an
                                account? Log In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
