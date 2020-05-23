import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import navbar from "../../resources/images/navbar.png";
import Grid from "@material-ui/core/Grid";
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotesIcon from '@material-ui/icons/Notes';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#9B59B6'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#9B59B6'

    },
    // necessary for content to be below app bar
    toolbar: {
        backgroundColor: '#8E44AD',
        ...theme.mixins.toolbar,
        minHeight: '90px'
    }, bottomToolbar: {
        backgroundColor: '#8E44AD',
        ...theme.mixins.toolbar,
        bottom: 0,
        position: 'absolute',
        width: "100%"
    },
    listItem: {
        color: 'white',
        fontWeight: 'bold',
        height: 70
    },
    recentListItem: {
        color: 'white',
        fontWeight: 'bold',
        height: 50
    },
    navAdd: {
        color: 'white',
        fontWeight: 'bold',
        height: 45,
        width: 45,
        paddingBottom: '6%',
        alignSelf: "center"
    },
    dividerColor: {
        backgroundColor: 'white',
        width: '80%',
        alignSelf: "center"
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export function SideBar() {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar}><Grid item xs={12} container
                                                   direction="row"
                                                   justify="center"
                                                   alignItems="center"><img src={navbar}/>
            </Grid></div>
            <Divider/>
            <List>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><DashboardIcon style={{color: "white"}}/> </ListItemIcon>
                    <ListItemText primary={"Boards"}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><NotesIcon style={{color: "white"}}/> </ListItemIcon>
                    <ListItemText primary={"Notes"}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><ListAltIcon style={{color: "white"}}/> </ListItemIcon>
                    <ListItemText primary={"Tasks"}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon><DynamicFeedIcon style={{color: "white"}}/> </ListItemIcon>
                    <ListItemText primary={"Feed"}/>
                </ListItem>

            </List>
            <Divider classes={{root: classes.dividerColor}}/>
            <Box component="span" m={1}>
                <Typography variant="h6" component="h6" style={{color: "white", paddingTop: '4%'}}>
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
            <ControlPointIcon button className={classes.navAdd}/>
            <Divider classes={{root: classes.dividerColor}}/>
            <Grid item xs={12} container
                  direction="row"
                  justify="center"
                  alignItems="center" className={classes.bottomToolbar}>
                <FacebookIcon style={{color: "white"}}/>
                <TwitterIcon style={{color: "white"}}/>
            </Grid>
        </Drawer>
    );
}

