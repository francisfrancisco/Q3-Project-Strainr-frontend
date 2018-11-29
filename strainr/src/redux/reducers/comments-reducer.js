import { SHOW_COMMENT, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actions/comments-actions';

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {

    case SHOW_COMMENT:
      return state.filter(comment => comment.id !== Number(action.payload.id)) //filter for comment

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
