import React from 'react';
import RecipeSearch from './recipeSearch';
import RecipeList from './recipeList';
import SavedRecipes from './savedRecipes';

const Dashboard = props => {

  return (
    <div className='row' style={{padding:'2em'}}>
      <div className='col-6'>
        <RecipeSearch />
      </div>
      <div className='col-6'>
        <SavedRecipes />
      </div>
      <RecipeList />
    </div>
  );
}

export default Dashboard
