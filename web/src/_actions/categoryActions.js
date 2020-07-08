import {categoryConstants} from "../_constants/categoryConstants";
import {categoryService} from "../_services";
import {alertActions} from "./alertActions";
import {miscActions} from "./miscActions";

export const categoryActions = {
    add
}

function add(payload) {

    return dispatch => {
        dispatch(request({payload}));
        categoryService.add(payload)
            .then(
                payload => {
                    console.log("sss")
                    dispatch(alertActions.success('Added successfully'));
                    return false;
                    // dispatch(success(payload));
                },
                error => {
                    console.log(error)
                    // dispatch(failure(error.toString()));
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