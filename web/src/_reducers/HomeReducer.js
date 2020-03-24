import { HomeConstants } from '../_constants';

export function home(state = {}, action) {
  switch (action.type) {
    case HomeConstants.OPEN_LOGIN_MODAL:
      return {
        modalOpen: true
      };
    case HomeConstants.CLOSE_LOGIN_MODAL:
      return {
        modalOpen: false
      };
    default:
      return state
  }
}