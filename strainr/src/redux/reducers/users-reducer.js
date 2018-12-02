import { LOGIN_USER, CREATE_USER } from '../actions/users-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case LOGIN_USER:
      return [...state, action.payload] //filter?

    /*case LOGOUT_USER:
      return action.payload*/ //filter?

    case CREATE_USER:
      return action.payload


    default:
      return state
  }
}
