import React from 'react';
import RecipeSearch from './recipeSearch';
import RecipeList from './recipeList';
import {connect} from 'react-redux';

const Dashboard = props => {

  return (
    <div className="App">
      <div className='row'>
        <RecipeSearch className="col-6" />
      </div>
        <RecipeList />
    </div>
  );
}

/*const mapStateToProps = (state, props) => {
  return {
    GOING TO GET ID FROM STATE FOR USER?
    user: state.users.filter(user => user.id == props.match.params.id)
  }
}*/

export default connect(/*mapStateToProps*/)(Dashboard);
