import { LOGIN_USER, LOGOUT_USER, CREATE_USER, INDEX_PAGE } from '../actions/users-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case INDEX_PAGE:
      return action.payload

    case LOGIN_USER:
      return [...state, action.payload] //filter?

    case LOGOUT_USER:
      return action.payload //filter?

    case CREATE_USER:
      return action.payload


    default:
      return state
  }
}
