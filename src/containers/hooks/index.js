import { connect } from 'react-redux';
import Hooks from '~/components/hooks';
import { toggleHelp } from '~/actions/state';
import { getHelpSpotsVisible } from '~/getters/hooks';

function mapStateToProps(state) {
  return {
    help: getHelpSpotsVisible(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleHelp: () => {
      dispatch(toggleHelp());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hooks);
