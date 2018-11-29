import React, { Component } from 'react';
import TopNav from './components/topNav';
import Login from './components/login';
import Dashboard from './components/dashboard';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/dashboard/:id' component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}


/*const mapStateToProps = state => {
  return {
    recipes: state.recipes GOING TO GET ID FROM STATE FOR USER?
  }
}*/

export default connect(/*mapStateToProps*/)(App)
