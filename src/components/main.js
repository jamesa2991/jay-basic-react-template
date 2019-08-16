import React from 'react';
import Top from '~/components/top';
import Bottom from '~/components/bottom';
import propTypes from 'prop-types';

export default function Main(props) {
  return (
    <div>
      <div className="app-title">
        <h1> Welcome to Jay's Playground </h1>
        <span className="toggle-help" onClick={props.toggleHelp}>
          Help : {props.help ? 'On' : 'Off'}
        </span>
      </div>
      <div className="main-content">
        <h2> Hooks Test </h2>
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
