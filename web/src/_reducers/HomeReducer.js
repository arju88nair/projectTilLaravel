import { HomeConstants } from '../_constants';

export function HomeReducers(state = {}, action) {
  switch (action.type) {
    case HomeConstants.OPEN_LOGIN_MODAL:
      return {
        currentView:'logIn',
        modalOpen: true
      };
      case HomeConstants.OPEN_SIGNUP_MODAL:
      return {
        currentView:'signUp',
        modalOpen: true
      };
    case HomeConstants.CLOSE_MODAL:
      return {
        modalOpen: false
      };
      case HomeConstants.LOGIN_VIEW:
        return {
        currentView:action.view,
        modalOpen: true
      };
    default:
      return state
  }
}