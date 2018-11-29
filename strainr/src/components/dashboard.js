import React, { Component } from 'react';
import RecipeSearch from './recipeSearch';
import RecipeList from './recipeList';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <RecipeSearch className="col-6" />
        </div>
          <RecipeList />
      </div>
    );
  }
}

export default Dashboard;
