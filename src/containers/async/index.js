import { connect } from 'react-redux';
import Async from '~/components/async';
import { fetchGitData } from '~/actions/async';
// import { getHelpSpotsVisible } from '~/getters/hooks';

function mapStateToProps() {
  return {
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
