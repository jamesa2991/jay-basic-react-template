import { connect } from 'react-redux';
import { TOOLTIP_MAP } from '~/constants/hooks';
import Message from '~/components/hooks/help/message';

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
