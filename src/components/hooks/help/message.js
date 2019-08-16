import React from 'react';
import propTypes from 'prop-types';

export default function Help(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

Help.propTypes = {
  message: propTypes.string,
};
