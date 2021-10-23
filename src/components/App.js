import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import history from '../history';

import Contents from './Contents';
import Footer from './Footer';
import CreateMember from './CreateMember';
import Login from './Login';
import Regis from './Regis';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Contents} />
            <Route path="/register" exact component={CreateMember} />
            <Route path="/login" exact component={Login} />
            <Route path="/regisFunRun" exact component={Regis} />
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
