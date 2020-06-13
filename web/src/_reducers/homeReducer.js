import {homeConstants, miscConstants} from '../_constants';

export function misc(state = {}, action) {
    switch (action.type) {
        case miscConstants.OPEN_SPINNER:
            return {spinner: true};

        default:
            return state
    }
}