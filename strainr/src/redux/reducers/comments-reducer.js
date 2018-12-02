import { SHOW_COMMENTS, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/comments-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case SHOW_COMMENTS:
      return action.payload

    case CREATE_COMMENT:
      return [...state, action.payload]

    case UPDATE_COMMENT:
      return [...state, action.payload] //?????

    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== Number(action.payload.id))


    default:
      return state
  }
}
