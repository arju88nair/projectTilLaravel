import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import navbar from "../../resources/images/main.png";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotesIcon from '@material-ui/icons/Notes';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {userActions} from "../../_actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        color: "#333333",
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
            marginLeft: theme.spacing(1),
            width: '30%',
        },
        border: "thin solid lightgray"
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

    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        backgroundColor: '#232323'

    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: 'white'
    },
    bottomToolbar: {
        backgroundColor: '#fff',
        ...theme.mixins.toolbar,
        bottom: 0,
        position: 'absolute',
        width: "100%",
        borderTop:'thin solid grey'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: {
        backgroundColor: '#white',
        ...theme.mixins.toolbar,
        minHeight: '90px'
    }, drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#white'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItem: {
        color: 'black',
        fontWeight: 'bold',
        height: 55
    },
    recentListItem: {
        color: 'black',
        fontWeight: 'bold',
        height: 50
    },
    navAdd: {
        color: 'black',
        fontWeight: 'bold',
        height: 45,
        width: 45,
        paddingBottom: '6%',
        alignSelf: "center"
    },
    dividerColor: {
        backgroundColor: 'black',
        width: '80%',
        alignSelf: "center"
    },
    button: {
        margin: theme.spacing(1),
        textTransform: 'lowercase'
    },

}));

export function SideBar(props) {
    const {window} = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const dispatch = useDispatch();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(userActions.logout());
        handleMobileMenuClose();
    };
 const handleMenuClose = () => {
     setAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

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
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}><
                Grid item xs={12} container
                     direction="row"
                     justify="center"
                     alignItems="center"><img src={navbar}/>
            </Grid></div>
            <Divider/>
            <List>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><DashboardIcon style={{color: "black"}}/></ListItemIcon>
                    <ListItemText primary={"Boardstrial" +
                    ""}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><NotesIcon style={{color: "black"}}/></ListItemIcon>
                    <ListItemText primary={"Notes"}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><ListAltIcon style={{color: "black"}}/></ListItemIcon>
                    <ListItemText primary={"Tasks"}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><DynamicFeedIcon style={{color: "black"}}/></ListItemIcon>
                    <ListItemText primary={"Feed"}/>
                </ListItem>

            </List>
            <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="center">
                <Divider classes={{root: classes.dividerColor}}/>
            </Grid>
            <Box m={1}>
                <Typography variant="h6" component="h6" style={{color: "black", paddingTop: '4%', marginLeft: '2%'}}>
                    Recent Notes
                </Typography>
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text} className={classes.recentListItem}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="center">
                <ControlPointIcon className={classes.navAdd}/>
            </Grid>
            <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="center">
                <Divider classes={{root: classes.dividerColor}}/>
            </Grid>
            <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="center" className={classes.bottomToolbar}>
                <FacebookIcon style={{color: "black"}}/>
                <TwitterIcon style={{color: "black"}}/>
            </Grid>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const user = useSelector(state => state.authentication.user);
    return (
        <div className={classes.root}>
            <CssBaseline/>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        style={{color: "#333333"}}
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" style={{color: "#333333"}}>
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        {/*<Button*/}
                        {/*    variant="outlined"*/}
                        {/*    className={classes.button}*/}
                        {/*    startIcon={<IconButton*/}
                        {/*        edge="end"*/}
                        {/*        aria-label="account of current user"*/}
                        {/*        aria-controls={menuId}*/}
                        {/*        aria-haspopup="true"*/}
                        {/*        onClick={handleProfileMenuOpen}*/}
                        {/*        style={{color: "#333333",border:'none'}}*/}
                        {/*    >*/}
                        {/*        <AccountCircle/>*/}
                        {/*    </IconButton>}*/}
                        {/*>{users.username}</Button>*/}
                        <Button
                            style={{margin:'2px'}}
                            color="default"
                            className={classes.button}
                            size="small"
                            onClick={handleProfileMenuOpen}
                            startIcon={<AccountCircle/>}
                        >
                            {user.username}
                        </Button>

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            style={{color: "#333333"}}
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor='left'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

