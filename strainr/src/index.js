import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { fetchRecipes } from './redux/actions/recipes-actions';
import { fetchSavedRecipes } from './redux/actions/savedRecipes-actions';
import { loginUser } from './redux/actions/users-actions';
import { showComments, deleteComment } from './redux/actions/comments-actions';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch( fetchRecipes() );
store.dispatch( fetchSavedRecipes() );
store.dispatch( showComments() );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
