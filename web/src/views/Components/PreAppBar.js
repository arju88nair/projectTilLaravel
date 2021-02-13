import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from "../../resources/images/main.png";
import Button from "@material-ui/core/Button";
import {NavLink} from 'react-router-dom'
import {Link, useLocation} from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useSelector} from "react-redux";
import {COLORS} from '../../_helpers/';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        maxWidth: 180,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    logo: {
        maxWidth: 180,

    },
    logoDiv: {
        display: "grid",
        alignContent: "center",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1000,
        color: '#fff',
    },
    navBar:{
        background: 'var(--color-topBar)',
        alignContent:"center"
    },
    navBarText:{
        textDecoration: 'none',
        color: 'var(--color-text)'
    },
}));

export function PreAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const location = useLocation();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const open = useSelector(state => state.misc.spinner);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/landing"  className={classes.navBarText}>Feed </NavLink>
            </MenuItem>
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/landing" className={classes.navBarText}>Blog </NavLink>
            </MenuItem>
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/register" className={classes.navBarText}>Get Started </NavLink>
            </MenuItem>
            {/*<MenuItem style={{border: "4px solid #457FCA"}}>*/}
            {/*    <NavLink to="/login" style={{textDecoration: 'none', color: '#1488cc'}}>Log In </NavLink>*/}
            {/*</MenuItem>*/}
        </Menu>
    );

    const renderButtons = () => {
        switch (location.pathname) {

            case "/login":
                return <Button
                    variant="contained"
                    style={{
                        "backgroundImage": "linear-gradient(to right, #1488cc, #0076cb, #0062c7, #004cbf, #2b32b2)",
                        color: 'white', fontWeight: "600"
                    }}
                    component={Link} to="/register">
                    Sign Up
                </Button>;
            case "/register":
                return <Button
                    variant="contained"
                    style={{
                        "backgroundImage": "linear-gradient(to right, #1488cc, #0076cb, #0062c7, #004cbf, #2b32b2)",
                        color: 'white', fontWeight: "600"
                    }}
                    component={Link} to="/login">
                    Log In
                </Button>;
            case "/landing":
                return <Button
                    variant="contained"
                    style={{
                        "backgroundImage": "linear-gradient(to right, #1488cc, #0076cb, #0062c7, #004cbf, #2b32b2)",
                        color: 'white', fontWeight: "600"
                    }}
                    component={Link} to="/register">
                    Get started
                </Button>;


        }
    }

    return (

        <div className={classes.grow}>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <AppBar position="static" className={classes.navBar} >
                <Toolbar>
                    <Grid item className={classes.logoDiv} component={Link} to="/landing">
                        <img src={logo} alt="logo" className={classes.logo} />
                    </Grid>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <div>
                            <Button className={classes.navBarText} style={{fontWeight: "600",backgroundColor: 'transparent'}} component={Link} to="/landing">
                                Feed
                            </Button>
                            <Button className={classes.navBarText} style={{fontWeight: "600",backgroundColor: 'transparent'}} component={Link} to="/landing">
                                Blog
                            </Button>

                            {renderButtons()}


                        </div>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon style={{color: '#000'}}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
