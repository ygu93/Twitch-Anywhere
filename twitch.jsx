import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {requestUser} from './actions/twitch_actions';
import Root from './components/root';
import {bindToken} from './auth.js';

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
    store.dispatch(requestUser(window.authToken));
    ReactDOM.render(<Root store={store}/>, root);
  };
  bindToken(setUp);
});
