import React from 'react';
import Recipe from './recipe';
import {connect} from 'react-redux';

const RecipeSearch = (props) => {

  let listOfRecipes = props.recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)
  
  return (
    <div className="row" style={{textAlign: 'left', margin: '0 auto'}}>
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
