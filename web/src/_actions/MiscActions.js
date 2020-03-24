import { HomeConstants } from '../_constants/HomeConstants';

export const MiscActions = {
    openLoginModal,
};

function openLoginModal() {
        return { type: HomeConstants.OPEN_LOGIN_MODAL };
}
