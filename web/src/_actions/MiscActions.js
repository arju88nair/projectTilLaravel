import {HomeConstants} from '../_constants/HomeConstants';

export const MiscActions = {
    openLoginModal,
    closeModal,
    loginView
};

function openLoginModal(parameter) {
    if (parameter == "logIn") {
        return {type: HomeConstants.OPEN_LOGIN_MODAL};
    } else {
        return {type: HomeConstants.OPEN_SIGNUP_MODAL};
    }
}

function loginView(view) {
    return {type: HomeConstants.LOGIN_VIEW,view:view};
}

function closeModal() {
    return {type: HomeConstants.CLOSE_MODAL};
}
