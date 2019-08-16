import { connect } from 'react-redux';
import Help from '~/components/hooks/help';
import { getHelpSpotsVisible } from '~/getters/hooks';

function mapStateToProps(state, ownProps) {
  return {
    location: ownProps.location,
    helpEnabled: getHelpSpotsVisible(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Help);
