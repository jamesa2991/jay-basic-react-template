import { combineReducers } from 'redux-immutable';
import hooks from './hooks';
import async from './async';

export default combineReducers({
  hooks,
  async,
});
