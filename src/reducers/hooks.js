import { Map } from 'immutable';
import { TOGGLE_HELP_SPOTS } from '~/constants/hooks';

export const initialState = Map({
  visible: false,
});

export default function Hooks(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HELP_SPOTS:
      return state.set('visible', !state.get('visible'));
    default:
      return state;
  }
}
