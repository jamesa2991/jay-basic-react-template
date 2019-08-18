import { connect } from 'react-redux';
import Async from '~/components/async';
import { fetchGitData } from '~/actions/async';
// import { getHelpSpotsVisible } from '~/getters/hooks';
import { getUserData, getUserError } from '~/getters/async';

function mapStateToProps(state) {
  return {
    data: getUserData(state),
    error: getUserError(state),
    // help: getHelpSpotsVisible(state),
  };
}

function mapDispatchToProps() {
  return {
    fetchGitData,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Async);
