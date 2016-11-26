import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {getGames, getStreams, login, fetchStreamsOfGame} from './util/twitch_api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  window.login = login;
  ReactDOM.render(<Root store={store}/>, root);
});
