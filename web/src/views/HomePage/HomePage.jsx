import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SideBar}from '../Components/SideBar'
import {CategoryVIew}from './CategoryVIew'
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import {CategoryModal} from "../Components/CategoryModal";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CategoryModal/>
            <CssBaseline />
            <SideBar/>
            <CategoryVIew/>
        </div>
    );
}

export { HomePage };