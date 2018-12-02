import axios from 'axios';
export const FETCH_SAVED_RECIPES = 'FETCH_SAVED_RECIPES';
export const FETCH_SAVED_RECIPES_FAIL = 'FETCH_SAVED_RECIPES_FAIL';

export const fetchSavedRecipes = () => {
  return dispatch => {
  axios.get(`http://localhost:8000/api/savedRecipes/1`)
  .then(res => dispatch({
    type: FETCH_SAVED_RECIPES,
    payload: res.data
  }))
  .catch(err => dispatch({
      type: FETCH_SAVED_RECIPES_FAIL,
      payload: err
    }))
  }
}
