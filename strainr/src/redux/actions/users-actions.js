import axios from 'axios';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
/*export const LOGOUT_USER = 'LOGOUT_USER';*/

export const createUser = () => {
  return dispatch => {
    axios.post(`https://localhost:8000/api/register`)
    .then(res => dispatch({
      type: CREATE_USER,
      payload: res.data
    }));
  }
}

export const loginUser = id => {
  return dispatch => {
  axios.get(`https://api/user/${id}`)
  .then(res => dispatch({
    type: LOGIN_USER,
    payload: res.data
  }));
  }
}
/*export const logoutUser = XXXXXX => {
  return dispatch => {
    axios.get(`https://api.?????????/${XXXXXX}`)
    .then(res => dispatch({
      type: LOGOUT_USER,
      payload: res.data
    }));
  }
}*/
