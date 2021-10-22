import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import history from '../history';

import Contents from './Contents';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Contents} />
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
