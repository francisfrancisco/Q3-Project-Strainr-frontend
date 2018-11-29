import axios from 'axios';
export const FETCH_RECIPES = 'FETCH_RECIPES';

export const fetchRecipes = (cookTime, protein) => {
  return dispatch => {
  axios.get(`https://api..com/search?app_id=69c5928f&app_key=59ccc0030c83e07047705cb58d8d16ab&time=10-${cookTime}&q=${protein}`)
  .then(res => dispatch({
    type: FETCH_RECIPES,
    payload: res.data.hits
  }));
  }
}
