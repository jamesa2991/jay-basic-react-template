import { connect } from 'react-redux';
import Help from '~/components/hooks/help';

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
    helpEnabled: state.getIn(['hooks', 'visible']),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Help);
