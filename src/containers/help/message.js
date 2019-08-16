import { TOOLTIP_MAP } from '~/constants/help';
import { connect } from 'react-redux';
import Message from '~/components/help/message';

function mapStateToProps(state, ownProps) {
  return {
    message: TOOLTIP_MAP[ownProps.location],
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
