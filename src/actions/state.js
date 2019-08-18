import { TOGGLE_HELP_SPOTS } from '~/constants/hooks';
import { SET_USER_DATA, SET_USER_ERROR, RESET_USER_DATA } from '~/constants/async';

//Hooks
export const toggleHelp = () => ({
  type: TOGGLE_HELP_SPOTS,
});

//async

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

export const setUserError = (flag) => ({
  type: SET_USER_ERROR,
  flag,
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});
