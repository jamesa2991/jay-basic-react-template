import { Map } from 'immutable';


export const initialState = Map({
  visible: false,
});

export default function Help(state = initialState, action) {
  switch (action.type) {
    case 'toggleHelp':
      return state.set('visible', !state.get('visible'));
    default:
      return state;
  }
}