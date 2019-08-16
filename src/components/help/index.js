import React from 'react';
import propTypes from 'prop-types';
import useHelp from '~/hooks/help';

export default function Help(props) {
  const [isVisible, content, setVisible] = useHelp(props.location);

  return props.helpEnabled ? (
    <React.Fragment>
      <div onClick={() => setVisible(!isVisible)}>HELP SPOT</div>
      {content}
    </React.Fragment>
  ) : null;
}

Help.propTypes = {
  location: propTypes.string,
};
