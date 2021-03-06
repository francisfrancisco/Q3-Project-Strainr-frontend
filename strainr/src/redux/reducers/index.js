import { combineReducers } from 'redux';
import recipesReducer from './recipes-reducer';
import usersReducer from './users-reducer';
import commentsReducer from './comments-reducer';
import savedRecipesReducer from './savedRecipes-reducer';

export default combineReducers({
  recipes: recipesReducer,
  users: usersReducer,
  comments: commentsReducer,
  savedRecipes: savedRecipesReducer
})
