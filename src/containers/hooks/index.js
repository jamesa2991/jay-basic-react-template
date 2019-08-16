import { connect } from 'react-redux';
import Hooks from '~/components/hooks';
import { toggleHelp } from '~/actions/state';

function mapStateToProps(state) {
  return {
    help: state.getIn(['hooks', 'visible'], false),
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
