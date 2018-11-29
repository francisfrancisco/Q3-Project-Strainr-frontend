import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { fetchRecipes } from './redux/actions/recipes-actions';
import { loginUser, logoutUser, indexPage } from './redux/actions/users-actions';
import { showComment, deleteComment } from './redux/actions/comments-actions';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch( fetchRecipes() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
