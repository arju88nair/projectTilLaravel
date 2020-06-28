import { combineReducers } from 'redux';
import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { misc } from './miscReducers';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  misc
});

export default rootReducer;