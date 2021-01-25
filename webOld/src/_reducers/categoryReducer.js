import {categoryConstants} from '../_constants';

export function categories(state = {}, action) {
    switch (action.type) {
        case categoryConstants.ADD_REQUEST:
            return {
                adding: true,
            };
        case categoryConstants.ADD_SUCCESS:
            return {
                ...state,
                added: true,
                category: action.category
            };
        case categoryConstants.ADD_FAILURE:
            return {
                ...state,
                added: false,
            };
        case categoryConstants.GET_REQUEST:
            return {
                loading: true,
            };
        case categoryConstants.GET_SUCCESS:

            return {
                loading: false,
                categories: action.payload
            };
        case categoryConstants.GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error

            };
        default:
            return state
    }
}