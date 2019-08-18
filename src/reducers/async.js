import { Map } from 'immutable';
import { SET_USER_DATA, SET_USER_ERROR, RESET_USER_DATA } from '~/constants/async';

export const initialState = Map({
  user: Map({
    data: null,
    error: false,
  }),
});

export default function Hooks(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return state.setIn(['user', 'data'], action.data).setIn(['user', 'error'], false);
    case SET_USER_ERROR:
      return state.setIn(['user', 'error'], true);
    case RESET_USER_DATA:
    default:
      return state;
  }
}
