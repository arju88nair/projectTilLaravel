import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import {CategorySkeleton} from "../Components/CategorySkeleton";
import {useDispatch, useSelector} from "react-redux";
import {categoryActions} from "../../_actions/categoryActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '1%',
        // display: 'flex',
        // verticalAlign: 'middle',
        // height:'100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
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

function ErrorRefresh() {
    const dispatch = useDispatch();

    const handleErrorRefresh = (event) => {
        dispatch(categoryActions.get());
    };
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center" xs={12}>
            <Typography gutterBottom variant="body2">
                Something went wrong.Please Try again
            </Typography>
            <Button onClick={handleErrorRefresh}>Retry</Button>
        </Grid>
    )
}

function CategoryCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {['All mail', 'Trash', 'Spam', 'All mails', 'Trashed', 'Spams', 'All mailed', 'Trashy', 'Spammed'].map((text, index) => (
                <Grid item xs={12} sm={6} lg={3} xl={2} key={text}>
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
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with
                                your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon/>
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Method:</Typography>
                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                    for 10

                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                    medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                    lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                    chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt
                                    and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
                                    Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                    and
                                    cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                    heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                                    and
                                    cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to
                                    7
                                    minutes more. (Discard any mussels that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}
        </div>
    )
}

export function Category() {
    const classes = useStyles();
    const categoryState = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        dispatch(categoryActions.get());
    }, []);


    return (
        <div className={classes.cateContainer}>


            <Typography style={{marginBottom: '1%'}} variant="h6" gutterBottom>Your Boards</Typography>

            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="center" spacing={3}>
                {categoryState.loading && Array(6).fill(<CategorySkeleton/>)}
                {categoryState.error && <ErrorRefresh/>}
                {/*{categoryState.categories && <CategoryCards/>}*/}
                {['All mail', 'Trash', 'Spam', 'All mails', 'Trashed', 'Spams', 'All mailed', 'Trashy', 'Spammed'].map((text, index) => (
                    <Grid item xs={12} sm={6} lg={3} xl={2} key={text}>
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
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10

                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                        lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken
                                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt
                                        and
                                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes.
                                        Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                        and
                                        cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                        heat to
                                        medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                                        and
                                        cook
                                        again without stirring, until mussels have opened and rice is just tender, 5 to
                                        7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}            </Grid>
        </div>
    );
}
