import {categoryConstants} from "../_constants/categoryConstants";
import {categoryService} from "../_services";
import {alertActions} from "./alertActions";
import {miscActions} from "./miscActions";

export const categoryActions = {
    add,
    get
}

function add(payload) {
    return dispatch => {
        dispatch(request({payload}));
        categoryService.add(payload)
            .then(
                payload => {
                    dispatch(alertActions.success('Added successfully'));
                    dispatch(success(payload));
                    dispatch(miscActions.closeSpinner(false))

                },
                error => {
                    console.log(error)
                    dispatch(failure(error.toString()));
                    dispatch(miscActions.closeSpinner(false))
                    dispatch(alertActions.error(error.toString()));
                }
            );

    };

    function request(payload) {
        return {type: categoryConstants.ADD_REQUEST, payload}
    }

    function success(payload) {
        return {type: categoryConstants.ADD_SUCCESS, payload}
    }

    function failure(error) {
        return {type: categoryConstants.ADD_FAILURE, error}
    }
}


function get(payload) {
    return dispatch => {
        dispatch(request({payload}));
        categoryService.get(payload)
            .then(
                payload => {
                    // dispatch(alertActions.success('Added successfully'));
                    dispatch(success(payload));
                    dispatch(miscActions.closeSpinner(false))

                },
                error => {
                    console.log(error)
                    dispatch(failure(error.toString()));
                    dispatch(miscActions.closeSpinner(false))
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(payload) {
        return {type: categoryConstants.GET_REQUEST, payload}
    }

    function success(payload) {
        return {type: categoryConstants.GET_SUCCESS, payload}
    }

    function failure(error) {
        console.log(error)

        return {type: categoryConstants.GET_FAILURE, error}
    }
}