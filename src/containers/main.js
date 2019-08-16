import { connect } from 'react-redux';
import Main from '~/components/main';
import { toggleHelp } from '~/actions/state';

function mapStateToProps(state, ownProps) {
  return {
    help: state.getIn(['help', 'visible'], false),
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
)(Main);
