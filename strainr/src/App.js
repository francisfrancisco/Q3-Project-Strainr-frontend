import React, { Component } from 'react';
import './App.css';
import TopNav from './components/topNav';
import RecipeSearch from './components/recipeSearch';
import RecipeList from './components/recipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <div className='row'>
          <RecipeSearch className="col-6" />
        </div>
          <RecipeList />
      </div>
    );
  }
}

export default App;
