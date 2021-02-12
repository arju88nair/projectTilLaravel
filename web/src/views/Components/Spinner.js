import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1000,
        color: '#fff',
    },
}));

export function Spinner() {
    const classes = useStyles();
    const open = useSelector(state => state.misc.spinner);

    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    );
}
