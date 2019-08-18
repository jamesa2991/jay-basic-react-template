import React, { useState } from 'react';
import propTypes from 'prop-types';

export default function Async(props) {
  const [username, setUsername] = useState('');

  let message;
  if (props.error) {
    message = 'There has been an error fetching data';
  } else if (!props.error && !props.data) {
    message = 'Results will go here';
  } else {
    message = 'Success! User found.';
  }
  return (
    <div className="async-content">
      <div className="intro">Async - Enter a username to see Github info!</div>
      <div className="async-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.fetchGitData(username);
          }}
        >
          <input type="text" id="username" value={username} onChange={(ev) => setUsername(ev.target.value)} />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="async-results">{message}</div>
    </div>
  );
}

Async.propTypes = {
  fetchGitData: propTypes.func,
  error: propTypes.bool,
  data: propTypes.object,
};
