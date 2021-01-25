import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'success',
        message: action.message,
        open:true
      };
    case alertConstants.ERROR:
      return {
        type: 'error',
        message: action.message,
        open:true

      };
    case alertConstants.CLEAR:
      return {open:false};
    default:
      return state
  }
}