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
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
    navBar: {
        background: 'var(--color-topBar)',
    },
    navBarText: {
        textDecoration: 'none',
        color: 'var(--color-text)',
        textTransform: "none"
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
                <NavLink to="/landing" className={classes.navBarText}>Feed </NavLink>
            </MenuItem>
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/landing" className={classes.navBarText}>Blog </NavLink>
            </MenuItem>
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/login" className={classes.navBarText}>Login</NavLink>
            </MenuItem>
            <MenuItem style={{background: '#fefef9'}}>
                <NavLink to="/register" className={classes.navBarText}>Sign up</NavLink>
            </MenuItem>
        </Menu>
    );

    return (

        <div className={classes.grow}>
            <Backdrop className={classes.backdrop} open={open}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <Grid item className={classes.logoDiv} component={Link} to="/landing">
                        <img src={logo} alt="logo" className={classes.logo}/>
                    </Grid>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <div>

                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/landing">
                                Blog
                            </Button>
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/login">
                                Login
                            </Button>
                            <Button variant="contained" className={classes.navBarText}
                                    style={{
                                        background: 'var(--color-button)',
                                        color: 'white', fontWeight: "600"
                                    }}
                                    component={Link} to="/register">
                                Sign Up
                            </Button>
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
        </div>
    );
}
