import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {userActions} from '../../_actions';
import rightImage from "../../resources/images/brown-wooden-shelf-with-books-3646172.jpg";
import {LoginForm} from "./LoginForm";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        // border: "1px solid blue",
        flexGrow: 1

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    left: {
        height: '100vh'
    },
    right: {
        "position": "relative",
        "maxWidth": "100%",
        "maxHeight": "100%",
        "margin": "auto",
        "display": "block",
        "background": "rgba(0, 0, 0, 0.25)"
    },
    gridItem: {
        // border: "1px solid red",
        maxHeight: '100vh',
        overflowY: 'hidden'
    },
    rightImage: {
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto',
        display: 'block',
    },
    butText: {
        "position": "absolute",
        "cursor": "pointer",
        "color": "#fff",
        "fontSize": "1.3em",
        "fontFamily": "inherit",
        "textTransform": "uppercase",
        "textAlign": "center",
        "top": "0px",
        "left": "0px",
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center"
    }
}));


function LoginPage() {
    const classes = useStyles();

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const {username, password} = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        const {name, value} = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    return (
        <Grid
            container
            className={classes.root}
            style = {{minHeight: "100vh"}}
        >
            <Grid  container className={classes.gridItem} item xs={12} lg={5} sm={5}>
                <LoginForm/>
            </Grid>
            <Box
                component={Grid}
                className={classes.gridItem}
                item
                container
                xs={7}
                sm={7}
                display={{xs: "none", lg: "block", sm: 'block'}}
            >
                <div className={classes.right}>
                    <div className={classes.butText}><span>Heading</span>    <p>Bacon ipsum dolor amet jowl rump doner
                        ribeye cupim andouille bresaola brisket shoulder spare ribs short ribs cow ham hock. Bacon ipsum
                        dolor amet jowl rump doner ribeye cupim andouille bresaola brisket shoulder spare ribs short
                        ribs cow ham hock.</p></div>
                    <img className={classes.rightImage} src={rightImage} alt={"Book"}/>
                </div>
            </Box>

        </Grid>



        //     <Grid container style={{minHeight: "100vh",}}>
        //
        //     </Grid>


        // <Grid container style={{minHeight: "100vh",}}>
        //     <Grid item xs={12} sm={5} container
        //           direction="column"
        //           justify="center"
        //           alignItems="flex-start" className={classes.left}>
        //         <LoginForm/>
        //     </Grid>
        //
        //     <Grid xs={0} item sm={7} only='sm' style={{minHeight: "100vh",maxHeight: "100vh"}}  display={{ xs: "none", lg: "block" }} >
        //         <div><
        //             img src={rightImage} alt={"Book"}/>
        //         </div>
        //     </Grid>
        // </Grid>
    );
}

export {LoginPage};