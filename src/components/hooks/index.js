import React from 'react';
import propTypes from 'prop-types';
import Top from '~/components/hooks/top';
import Bottom from '~/components/hooks/bottom';

export default function Main(props) {
  return (
    <div className="inner-content">
      <div className="app-title">
        <h1> Hooks </h1>
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
