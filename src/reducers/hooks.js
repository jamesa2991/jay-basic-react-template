import { Map } from 'immutable';

export const initialState = Map({
  visible: false,
});

export default function Hooks(state = initialState, action) {
  switch (action.type) {
    case 'toggleHelpSpots':
      return state.set('visible', !state.get('visible'));
    default:
      return state;
  }
}
