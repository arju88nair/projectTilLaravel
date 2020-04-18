import {homeConstants} from '../_constants/homeConstants';

export const miscActions = {
    loginView
};

function loginView(view) {
    return {type: homeConstants.LOGIN_VIEW,view:view};
}

