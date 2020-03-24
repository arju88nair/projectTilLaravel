import { homeConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case homeConstants.OPEN_LOGIN_MODAL:
      return {
        loading: true
      };
    case homeConstants.CLOSE_LOGIN_MODAL:
      return {
        items: action.users
      };
    default:
      return state
  }
}