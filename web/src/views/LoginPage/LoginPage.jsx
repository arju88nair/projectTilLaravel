import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { userActions } from '../../_actions';
import Container from '@material-ui/core/Container';
import logo from '../../resources/images/main.png';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    left:{
        height: '100vh'
    },
    container:{

    }
}));


function LoginPage() {
    const classes = useStyles();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}   container
                      direction="row"
                      justify="center"
                      alignItems="flex-start" className={classes.left} style = {{minHeight: "100vh" ,background : 'linear-gradient(to top, #b761dc, #af5bd3, #a756ca, #a050c2, #984bb9, #9345b4, #8e3fb0, #8939ab, #8530a9, #8027a7, #7c1ca5, #770ea3)'}}>
                    <Grid item xs={12} container direction="row"
                          justify="center"
                          alignItems="center" style = {{ borderColor:'red'}}>
                        <img src={logo} />
                        <Container >
                            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                        </Container>
                    </Grid>


                    {/*<form name="form" onSubmit={handleSubmit}>*/}
                    {/*    <div className="form-group">*/}
                    {/*        <label>Username</label>*/}
                    {/*        <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />*/}
                    {/*        {submitted && !username &&*/}
                    {/*        <div className="invalid-feedback">Username is required</div>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*    <div className="form-group">*/}
                    {/*        <label>Password</label>*/}
                    {/*        <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />*/}
                    {/*        {submitted && !password &&*/}
                    {/*        <div className="invalid-feedback">Password is required</div>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*    <div className="form-group">*/}
                    {/*        <button className="btn btn-primary">*/}
                    {/*            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}*/}
                    {/*            Login*/}
                    {/*        </button>*/}
                    {/*        <Link to="/register" className="btn btn-link">Register</Link>*/}
                    {/*    </div>*/}
                    {/*</form>*/}

                </Grid>

                <Grid xs={0 } item sm={4}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export { LoginPage };