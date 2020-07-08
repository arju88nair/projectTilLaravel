import {categoryConstants} from '../_constants';

export function category(state = {}, action) {
    console.log("Reducer")
    console.log(action)
    switch (action.type) {
        case categoryConstants.ADD_REQUEST:
            return {
                adding: true,
                category: action.category
            };
        case categoryConstants.ADD_SUCCESS:
            return {
                added: true,
                category: action.category
            };
        case categoryConstants.ADD_FAILURE:
            return {
                ...state,
                added: false,
            };
        default:
            return state
    }
}