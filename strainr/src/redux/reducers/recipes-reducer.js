import { FETCH_RECIPES } from '../actions/recipes-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case FETCH_RECIPES:
      return action.payload

    default:
      return state
  }
}
