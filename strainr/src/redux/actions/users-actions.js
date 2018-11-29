import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const INDEX_PAGE = 'INDEX_PAGE';

export const createUser = XXXXXX => {
  return dispatch => {
    axios.post(`https://api.?????????/${XXXXXX}`)
    .then(res => dispatch({
      type: CREATE_USER,
      payload: res.data
    }));
  }
}

export const loginUser = id => {
  return dispatch => {
  axios.get(`https://api/dashboard/${id}`)
  .then(res => dispatch({
    type: LOGIN_USER,
    payload: res.data
  }));
  }
}
export const logoutUser = XXXXXX => {
  return dispatch => {
    axios.get(`https://api.?????????/${XXXXXX}`)
    .then(res => dispatch({
      type: LOGOUT_USER,
      payload: res.data
    }));
  }
}

export const indexPage = () => {
  return dispatch => {
  axios.get(`https://api/index`)
  .then(res => dispatch({
    type: INDEX_PAGE,
    payload: res.data
  }));
  }
}
