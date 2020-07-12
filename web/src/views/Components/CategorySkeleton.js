import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '1%'
    },
    card: {
        width: 240,
        minHeight: 320,
        // maxHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },

}));
const data = [
    {
        src:
            'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
];

function Media(props) {
    const { loading = true } = props;
    const classes = useStyles();

    return (

        <Grid container direction="row"
              justify="flex-start"
              alignItems="center" spacing={3}>

            <Grid item xs={12} sm={6} lg={3} xl={2}>
                {Array.from(new Array(3)).map((item, index) => (
                    // <C key={index} width={210} marginRight={0.5} my={5}>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title="Shrimp "
                            subheader="September 14, 2016"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon/>
                            </IconButton>

                        </CardActions>
                    </Card>

                ))}
            </Grid>
        </Grid>
        // <Grid container wrap="nowrap">
        //     {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        //         <Box key={index} width={210} marginRight={0.5} my={5}>
        //             {item ? (
        //                 <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
        //             ) : (
        //                 <Skeleton variant="rect" width={210} height={118} />
        //             )}
        //
        //             {item ? (
        //                 <Box pr={2}>
        //                     <Typography gutterBottom variant="body2">
        //                         {item.title}
        //                     </Typography>
        //                     <Typography display="block" variant="caption" color="textSecondary">
        //                         {item.channel}
        //                     </Typography>
        //                     <Typography variant="caption" color="textSecondary">
        //                         {`${item.views} • ${item.createdAt}`}
        //                     </Typography>
        //                 </Box>
        //             ) : (
        //                 <Box pt={0.5}>
        //                     <Skeleton />
        //                     <Skeleton width="60%" />
        //                 </Box>
        //             )}
        //         </Box>
        //     ))}
        // </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export  function CategorySkeleton() {
    const classes = useStyles();

    return (
        <div>
        {/*<Box  width={210} marginRight={0.5} my={5} className={classes.box}>*/}
        {/*    <Skeleton variant="rect" width={210} height={118} />*/}


        {/*    <Box pt={0.5}>*/}
        {/*        <Skeleton />*/}
        {/*        <Skeleton width="60%" />*/}
        {/*    </Box>*/}
        {/*</Box>*/}


            <Card className={classes.card}>
                <CardHeader
                    avatar={
                            <Skeleton animation="wave" variant="circle" width={40} height={40} />

                    }
                    />


                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />


                    <Skeleton animation="wave" height={10} width="40%" />


                    <Skeleton animation="wave" variant="rect" className={classes.media} />


                <CardContent>

                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>

                </CardContent>
            </Card>
        </div>
    );
}
