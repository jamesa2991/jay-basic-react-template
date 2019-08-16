import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '~/store';
import '~/style/main.scss';

//Static Components
import SideBar from '~/components/sidebar';
import Header from '~/components/header';

//Routed Components/Containers
import Home from '~components/home';
import Hooks from '~/containers/hooks';

window.DEBUG = {
  getState: store.getState,
  dispatch: store.dispatch,
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="jay-react">
          <div className="top-header">
            <Header />
          </div>
          <div className="main-body">
            <SideBar />
            <Route path="/" exact component={Home} />
            <Route path="/hooks" component={Hooks} />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
