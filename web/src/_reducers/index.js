import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { home } from './loginReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  home
});

export default rootReducer;