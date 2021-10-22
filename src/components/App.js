import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import history from '../history';
import Hero from './Hero';
import Contents from './Contents';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navbar />
          <Hero />
          <Switch>
            <Route path="/" exact component={Contents} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
