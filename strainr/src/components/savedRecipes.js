import React, { Component } from 'react';
import SavedRecipe from './savedRecipe';
import {connect} from 'react-redux';
import { ListGroup } from 'reactstrap';

class SavedRecipes extends Component {
  render() {
    let savedList = this.props.savedRecipes.map(recipe => <SavedRecipe key={recipe.id} recipe={recipe} />)
    return (
      <ListGroup flush>
      <h3>Saved Recipes</h3>
      {savedList}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    savedRecipes: state.savedRecipes
  }
}

export default connect(mapStateToProps)(SavedRecipes)
