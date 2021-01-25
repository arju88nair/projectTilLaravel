import {homeConstants} from '../_constants/homeConstants';
import {userService} from "../_services";
import {alertActions} from "./alertActions";
import {history} from "../_helpers";
import {miscActions} from "./miscActions";
import {userConstants} from "../_constants";

export const homeActions = {
    submitAddCategory,
};

function submitAddCategory(board) {
    miscActions.closeSpinner(false)

}