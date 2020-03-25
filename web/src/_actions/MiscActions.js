import { HomeConstants } from '../_constants/HomeConstants';

export const MiscActions = {
    openLoginModal,
    closeLoginModal
};

function openLoginModal() {
        return { type: HomeConstants.OPEN_LOGIN_MODAL};
}

function closeLoginModal() {
        return { type: HomeConstants.CLOSE_LOGIN_MODAL};
}
