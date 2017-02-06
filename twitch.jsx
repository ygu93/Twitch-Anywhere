import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {requestUser} from './actions/twitch_actions';
import Root from './components/root';
import {bindToken} from './auth.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {login} from './util/twitch_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let setUp = () => {
    let store;
    if(window.authToken){
      const preloadedState = {session:{authToken: window.authToken}};
      store = configureStore(preloadedState);
    }else{
      store = configureStore();
    }
    const root = document.getElementById('root');
    window.store = store;
    window.login = login;
    store.dispatch(requestUser(window.authToken));
    ReactDOM.render(<Root store={store}/>, root);
    hashHistory.push('/games');
  };
  bindToken(setUp);
});
