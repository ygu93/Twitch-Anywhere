import React from 'react';
import merge from 'lodash/merge';
import {RECEIVE_USER, RECEIVE_LOGIN, RECEIVE_LOGOUT} from '../actions/twitch_actions.js';
import {removeToken} from '../auth';

const SessionReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.user);
    case RECEIVE_LOGIN:
      dup['authToken'] = window.authToken;
      return dup;
    case RECEIVE_LOGOUT:
      dup['authToken'] = null;
      removeToken();
      return dup;
    default:
      return state;
  }
};

export default SessionReducer;
