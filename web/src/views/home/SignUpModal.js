import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {connect, useDispatch, useSelector} from "react-redux";
import {MiscActions} from "../../_actions";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {LoginWrapper} from "./SignupForm";
import Grid from '@material-ui/core/Grid';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function SignUpModal() {
    const theme = useTheme();
    const modalOpen = useSelector(state => state.HomeReducers.modalOpen);
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        dispatch(MiscActions.closeModal());
    };
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        <Grid container spacing={3}>
                            <LoginWrapper/>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

