import { connect } from 'react-redux';
import Help from '~/components/help';

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
    helpEnabled: state.getIn(['help', 'visible']),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Help);
