import React, {useState} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch, useSelector} from "react-redux";
import {miscActions, userActions} from "../../_actions";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {green} from "@material-ui/core/colors/green";
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {homeActions} from "../../_actions/homeActions";
import {Spinner} from "./Spinner";
import {categoryActions} from "../../_actions/categoryActions";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        paddingBottom: theme.spacing(2),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        alignSelf: 'right'
    },
    modalWindow: {
        bottom: '35%'
    }
}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});


const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


export function CategoryModal() {
    const classes = useStyles();
    const modalOpen = useSelector(state => state.misc.boardModal);
    const dispatch = useDispatch();
    const [newBoard, setBoard] = useState({title: '', description: ''});

    const handleClose = () => {
        dispatch(miscActions.closeCategoryModal(false));
    };

    const handleAddBoard = (e) => {
        e.preventDefault();
        dispatch(miscActions.openSpinner(true))
        dispatch(categoryActions.add(newBoard))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setBoard(newBoard => ({...newBoard, [event.target.name]: event.target.value}));
    }

    return (
        <div>
            <Spinner/>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modalOpen}
                    className={classes.modalWindow}>
                <form onSubmit={handleAddBoard}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add a shelf
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Shelves help you to categorise your items
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                onChange={handleChange}
                                margin="normal"
                                type="text"
                            />
                        </Grid> <Grid item xs={12}>
                        <TextField
                            id="Description"
                            label="Description"
                            name="description"
                            multiline
                            fullWidth
                            rows={4}
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus type="submit" color="default">
                        Save changes
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
