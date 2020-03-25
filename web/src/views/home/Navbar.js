import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar'
import {useDispatch, useSelector} from 'react-redux';
import { MiscActions } from '../../_actions';
import SignUp from "./SignUp";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'transparent',
        boxShadow: 'none',
        alignItems: 'flex-end',

        // width: 600, // a number of your choice

    },
    navContainer: {},
    tab: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        width: 20, // a number of your choice
    },
    indicator: {
        backgroundColor: '#0038FF',
    },
    signUp: {
        background: 'linear-gradient(45deg, #0038FF 30%, #A49EE9 90%)',
        border: 0,
        borderRadius: 50,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        fontWeight: 'bold',
    },
    logo:{
        color:'#0038FF', fontWeight: '590'
    }
}));


export  function Navbar() {

    const classes = useStyles();
    const [value, setValue] = React.useState('one');
    const dispatch = useDispatch();
    const modalOpen = useSelector(state => state.HomeReducers.modalOpen);



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        dispatch(MiscActions.openLoginModal());
    };

    const handleClose = () => {
        dispatch(MiscActions.closeLoginModal());
    };

    return (
        <Grid item xs={12}>
            <div className={classes.navContainer}>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={3} >
                            <Grid item xs={2} sm={1}  container
                                  direction="row"
                                  justify="flex-start"
                                  alignItems="center">
                                <img src={require('../../images/til.png')} className={classes.logo}/>
                            </Grid>
                            <Grid item xs={8} sm={11}>
                                <AppBar position="static" className={classes.appBar} >
                                    <Tabs value={value} onChange={handleChange} aria-label="Main tabs"
                                          classes={{indicator: classes.indicator}}>
                                        <Tab value="one" label="Popular" {...a11yProps('One')} className={classes.tab}/>
                                        <Tab value="two" label="Recent" {...a11yProps('two')} className={classes.tab}/>
                                        <Tab value="four" label="Topics" {...a11yProps('four')} className={classes.tab}/>
                                        <Tab value="three" label="Your Notes" {...a11yProps('three')} className={classes.tab}/>
                                    </Tabs>
                                </AppBar>
                            </Grid>
                        </Grid>
                        </Grid>
                    <Grid item xs={12} sm={3}>
                        <SearchBar
                            onChange={(newValue) => this.setState({value: newValue})}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                maxWidth: 800,
                                borderBottomRightRadius: 50,
                                borderTopRightRadius: 50
                            }}
                        /> </Grid>
                    <Grid item xs={12} sm={3} container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Button variant="outlined" color="primary"  disableRipple
                                style={{border: 'none', marginRight: 60, fontWeight: 'bold'}} onClick={handleOpen}>
                            Login
                        </Button>
                        <Button variant="outlined" className={classes.signUp} onClick={handleClose}>
                            Sign Up
                        </Button>
                    </Grid>

                </Grid>
            </div>
            {/*<TabPanel value={value} index="one">*/}
            {/*    Item One*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index="two">*/}
            {/*    Item Two*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index="three">*/}
            {/*    Item Three*/}
            {/*</TabPanel>*/}
        </Grid>

    );
}


