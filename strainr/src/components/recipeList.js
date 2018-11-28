import React from 'react';
import Recipe from './recipe';
import {connect} from 'react-redux';
import {} from 'reactstrap';

const RecipeSearch = (props) => {
  let listOfRecipes = props.recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)
  console.log('recipes', props.recipes);
  console.log('list', listOfRecipes);
  return (
    <div className="col-8" style={{textAlign: 'left', margin: '0 auto'}}>
      {listOfRecipes}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeSearch)
