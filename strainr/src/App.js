import React, { Component } from 'react';
import TopNav from './components/topNav';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route path='/dashboard/:id' component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
