import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        height:'82px'
    },
}));
export function NavBar() {
    const classes = useStyles();

    return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h6" noWrap>
                Permanent drawer
            </Typography>
        </Toolbar>
    </AppBar>
    )
}
