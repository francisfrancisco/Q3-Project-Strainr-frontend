import axios from 'axios';
export const SHOW_COMMENTS = 'SHOW_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const showComments = () => {
  return dispatch => {
    axios.get(`http://localhost:8000/api/comments/3`)
    .then(res => dispatch({
      type: SHOW_COMMENTS,
      payload: res.data
    }));
  }
}

export const createComment = id => {
  return dispatch => {
    axios.post(`https://api/comments/newComment/${id}`)
    .then(res => dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    }));
  }
}

export const updateComment = id => {
  return dispatch => {
    axios.patch(`https://api/comments/udpate/${id}`)
    .then(res => dispatch({
      type: UPDATE_COMMENT,
      payload: res.data
    }));
  }
}

export const deleteComment = id => {
  return dispatch => {
    axios.get(`https://api/comments/delete/${id}`)
    .then(res => dispatch({
      type: DELETE_COMMENT,
      payload: res.data
    }));
  }
}
