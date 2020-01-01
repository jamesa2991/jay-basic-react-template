import React from 'react';
import propTypes from 'prop-types';

export default function Main(props) {
  return (
    <div>
      <div className="app-title">
        <h1> React Application </h1>
      </div>
      <div className="main-content">
        <p> Welcome! </p>
      </div>
    </div>
  );
}

Main.propTypes = {};
