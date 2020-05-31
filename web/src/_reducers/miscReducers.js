import {miscConstants} from '../_constants';

export function misc(state = {}, action) {
    switch (action.type) {
        case miscConstants.OPEN_SPINNER:
            return {spinner: true};
        case miscConstants.CLOSE_SPINNER:
            return {spinner: false};
        case miscConstants.OPEN_CATEGORY_MODAL:
            return {catModal: true};
        case miscConstants.CLOSE_CATEGORY_MODAL:
            return {catModal: false};
        default:
            return state
    }
}