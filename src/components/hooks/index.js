import React from 'react';
import propTypes from 'prop-types';
import Top from '~/components/hooks/top';
import Bottom from '~/components/hooks/bottom';

export default function Main(props) {
  return (
    <div className="hooks-content">
      <div className="hooks-title">
        <h1> Hooks </h1>
        <span className="toggle-help" onClick={props.toggleHelp}>
          Help : {props.help ? 'On' : 'Off'}
        </span>
      </div>
      <div className="hooks-content">
        <Top />
        <Bottom />
      </div>
    </div>
  );
}

Main.propTypes = {
  toggleHelp: propTypes.func,
  help: propTypes.bool,
};
