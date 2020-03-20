import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Paper from "@material-ui/core/Paper";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar'

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
    root: {
        background: 'transparent',
        boxShadow: 'none',
        color: '#0038FF',
        fontSize: 12,
        alignItems: 'flex-end',
        // width: 600, // a number of your choice

    },
    navContainer: {
    },
    tab: {
        fontWeight: 'bolder',
        textTransform: 'capitalize',
    },
    indicator: {
        backgroundColor: '#0038FF',
    },
}));


export function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid item xs={12}><div className={classes.navContainer}  style={{ backgroundColor: 'yellow'}}>
                <Grid container spacing={6} direction="row"
                      justify="flex-end"
                      alignItems="flex-end">
                    <Grid item xs={5} style={{alignSelf: 'flex-end',backgroundColor: 'grey'}}>
                        <AppBar position="static" className={classes.root}>
                            <Tabs value={value} onChange={handleChange} aria-label="Main tabs"
                                  style={{alignSelf: 'flex-end'}}
                                  classes={{indicator: classes.indicator}}>
                                <Tab value="one" label="Popular" {...a11yProps('One')} className={classes.tab}/>
                                <Tab value="two" label="Recent" {...a11yProps('two')} className={classes.tab}/>
                                <Tab value="three" label="Your Notes" {...a11yProps('three')} className={classes.tab}/>
                            </Tabs>
                        </AppBar>
                    </Grid>
                    <Grid item xs={4} style={{alignSelf: 'flex-end',backgroundColor: 'green'}}>
                        <SearchBar
                            onChange={(newValue) => this.setState({value: newValue})}
                            onRequestSearch={() => console.log('onRequestSearch')}
                            style={{
                                margin: '0 auto',
                                maxWidth: 800,
                                borderBottomRightRadius: 50,
                                borderTopRightRadius: 50
                            }}
                        />
                    </Grid>
                    <Grid item xs={3} style={{backgroundColor: 'red'}}
                          >
                        <Link href="#" underline='none'>
                            Link
                        </Link>
                        <Button variant="outlined" color="primary" href="#outlined-buttons">
                            Link
                        </Button>
                        <Button variant="outlined" color="primary">
                            Primary
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


