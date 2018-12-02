import { FETCH_SAVED_RECIPES, FETCH_SAVED_RECIPES_FAIL } from '../actions/savedRecipes-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case FETCH_SAVED_RECIPES:
      return action.payload

      case FETCH_SAVED_RECIPES_FAIL:
        return action.payload

    default:
      return state
  }
}
