import React, { Component } from 'react';
import TopNav from './components/topNav';
import Index from './components/index';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
          <Route exact path='/' component={ Index } />
          <Route path='/dashboard/:id' component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
