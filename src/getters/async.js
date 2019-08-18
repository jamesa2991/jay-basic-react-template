export const getUserData = (state) => state.getIn(['async', 'user', 'data']);
export const getUserError = (state) => state.getIn(['async', 'user', 'error']);
