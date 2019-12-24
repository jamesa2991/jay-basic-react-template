import * as stateActions from '~/actions/state';
import * as stateActionTypes from '~/constants/hooks';

test('toggleHelp state action object', () => {
  expect(stateActions.toggleHelp()).toEqual({
    type: stateActionTypes.TOGGLE_HELP_SPOTS,
  });
});
