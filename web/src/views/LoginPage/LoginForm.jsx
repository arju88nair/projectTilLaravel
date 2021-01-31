import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider, makeStyles, createMuiTheme} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from "../../resources/images/main.png";
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

export function LoginForm() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const errorOpen = alert.open
    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (user.email && user.password) {
            dispatch(alertActions.clear());
            dispatch(miscActions.openSpinner(true));
            dispatch(userActions.login(user));
        }
    }

    const classes = useStyles();


    return (
        <Container component="main" maxWidth="sm" className={classes.loginBay}>
            <CssBaseline/>
            <div className={classes.paper}>

                <Typography component="h1" variant="h5">
                    Log in to your account
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
                        startIcon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAEGUlEQVRYheVWbWxTVRh+zrn3tt1M2dgHTtYa2ZqNOTa3CSgDZTHyAwhqxPlDHfIDJ0bCIGL4ELDGmDhjCDPOBDURPwiKi0qULWaGRiQjRDugjqrTDTfLpsx9uK3bbe+95/gD13btbdfW7RfPr3ve89z3ec45b857gBsdJJmfuN1YgGH1bgg8DxQcInHDJF4idl/nnBnge8T7McxfRB9bhhFu1CVlk0lkUyfSyW5Sr7bNigF+wFAMj/opulgReJxuBQA26oJFqp5pV2Ia4NtpHTr5IXg5jVN6OuYRDSXiVvKq8m7CBvhOehgXWB20pKSDWEhGUMQziR1Mb1p3Zfx56ZlZEc8hY7DxJdHEAZ0d4C8binDW34EJfXPIJjIs9Cuk4yiodh4AxaSwAl5sgoetx+B/BZpDxlDAi8gruBrLY6SBp6gLP7OSCKYIoFQ4jvnaJmKHqpeM2yHib+ETDLD7YONLZhKPMMAdRhu83I0mVUJXyK5JAJZKO8lryuGZEiaK6dsskBqYiYQnJWCNGJwtEY7PhXikAcYfDERXC8AWCcijY1ip1cyFOBByBNxhzgL1D+hwdpDVvoZoCTbWH/0jEUET9Y2Vp7jW7trW2ANcL63rEOVcMJ3CJ7w1VsK2wQpLIgYAoCD/ynIAPUDoEWh0oS5b8/cmKjATZEUonPoOGuBRbnopuY4ZC4wGZYNfIuvXZxuss21AIPgtIBuI+kweSP4I8lXV/BAw6I6WrDKz3RNtzjN584LeiVxDaIwQDoPgbQ+MQyf5t8YLAMoAQAPB+xOFOK8ukGv7huYtfdqpxFxWGOwOu9h6Ztl4t9c67e2wKNUjt9nXpUyNw8qenASAIWbE/tG78Lm8CH3qTaYzFuGjRMQBYMhl+jhcHABs5t+doePpBlT+oUvJUHeMrkSHOj8Q/s6f8+jbzWW74hXf99b+3V/0rdkYHqdgsJmvvBAai6jwg1+u6mhXs4rD4xIY7jX1n7inlz0R7TgcjirR6VWPNTn3Vvd4rRG5V2S0//TZns23xzRw4nRp4clRq/sfLum241zBKy+WRpoziPyBmUyckw0Cm1RMlcOqqeYXJX1DP0s1pmgGDHU+DPdIUCvdMMoeuPV0aX3twcsxDQDAkZaK2hbZckSN8iSIByKjkHqqcPbPKkhUxSO3nNp2qO5AYzgv6iXT2Fz+eqvP+tz/MUE4QeZfd7A0xfBmw/Z9dbqcWAkaTlU8+4OS88YwNyTlIovK2ipxYOuW9c7EH6VTeO/rOxd3KylNLiWzWIvzVpbAUC4NXsrn3urHN1z8NRY37nv+nZayqmvM+FK3lrb8mpZqCm8cBIBVGJ+wCOPf30a9ex9b++O5ePIm1WiOfVOQNyCnVUpEyyeEcyPVLguMXdy8rqMrmXw3Nv4F+RF0SocsQB0AAAAASUVORK5CYII="/>}
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
                        startIcon={<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAC7UlEQVRYhe2XvWsUYRDGf/Pu3omChRJM1IAQIhZCxM6oxFMR5SR3mhitTmzEf8BWUURsbFQQtZPYCRePRAkBkxhBU/lRCAqKIIkJxkQRi+Rub8fCZN372Nzm42z0qd6dd2aeZ+d9Z5mFfx2ymKBYa3dNPmpvEKiXvKqqjkTMzOfHXW2TVRMQS/Q2quWmQJPAtgC3VyJkjCud/Q/iH5ZFwP5EptYx9nmE00AkpN6cit52NHLpWdfBL4sWsOdodzOYNFAXkrgYX1VoH0ofHgpyMEEbLUceHgczsARygBpR+vYc7ekIcihbgZZkz04x0g+sWAK5H1kVDpSrRImA/YlMrWPZr4Ha+TJalpA61kjLjjo2rl/FiqgFQKztUVDIuGtL09P78Qm/seQIHGOfr0QOcLKjkVMnNtOwabVHXgF1Jse5YmOBgFiit3H2tlfEvl0bvPXU9xmGhscZfDY2f5Domd3tPQ1+k+1/UOOcBAnVarXrVnrrW3ff0vdkNExY1OQlBVycMxQegUgyTBaAaORPaDbnhg1DIFn0/Bux1u4atc1EaUghLpzd/tt/53rP9ubdNyYmp5nJuly5/rpSCs3aVs3z+4emwH8ElqkP8QIFxHPYumUNAO8//giTQmxX64Ep8B2BIqWZF4hPoz9D+Vmu691grwIiqhoieK7PB9Nxz3bh6svKHeCDmD9UXgUEN3yGJSLvyOcSAYbcyF/i11zU8nrWEzA7TLz6CwJezHVAgQAAETJVpxcp4CgQYFzpBLJVpM9qzrkXKKD/QfyDit6pFruq3hzqTnwMFADgaOQSMF4F/jGT18vFxrIDyewoNsDyDSTTIrJ3MB0fLt4oO5I96Wp9DpoCZpaJPFWOHCoMpbG2RztUtYvFz4VjItIWRA7zDKUAg+n4sGtLEyo3WFh3ZAWuieM2zUcOC/gx2d3e02DykhJIImwPSPcC3Iw6bmfxbV+yAD+aO3rXRrL5jSJSD6CqI7moNer/wv1HWPwCw9b3Nl82BYMAAAAASUVORK5CYII="/>}
                    >
                        Continue with Facebook
                    </Button>
                </div>
                <Divider style={{backgroundColor: 'gray', width: '80%'}}/>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    margin="normal"
                                    value={user.email}
                                    type="email"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={user.password} onChange={handleChange}
                                    inputProps={{minLength: 2}}
                                    color="primary"
                                />
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={12}>

                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"  />}
                                label="Remember me"
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
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                            style={{borderRadius: 25,  "backgroundImage": "linear-gradient(to right, #1488cc, #0076cb, #0062c7, #004cbf, #2b32b2)", color: 'white'}}
                    >
                        Log In
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link to="/register" variant="body2" style={{textDecoration: 'none', color: '#2b32b2'}}>
                                New here? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
