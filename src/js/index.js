import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from '~/containers/main';
import store from '~/store';
import '../scss/main.scss';

window.DEBUG = {
  getState: store.getState,
  dispatch: store.dispatch,
};

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Main />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
