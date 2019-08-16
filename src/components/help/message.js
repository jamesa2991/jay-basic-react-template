import React from 'react';
import propTypes from 'prop-types';
import { formatString } from '~/actions/libs';

export default function Help(props) {
  const stringArgs = { test1: 'String Test 1', test2: 'String Test 2' };
  const formatStringCallback = formatString(props.message);

  const message = formatStringCallback(stringArgs);
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Help.propTypes = {
  message: propTypes.string,
};
