import React from 'react';
import { Provider } from 'react-redux';
import Main from '~/containers/main';
import store from '~/store';
import '~/style/main.scss';

window.DEBUG = {
  getState: store.getState,
  dispatch: store.dispatch,
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
