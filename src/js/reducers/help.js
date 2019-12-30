import { Map } from 'immutable';

export const initialState = Map({});

export default function Help(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
