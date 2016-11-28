import React from 'react';
import {RECEIVE_ALL_STREAMS,
        RECEIVE_ALL_GAMES,
        RECEIVE_GAME,
        RECEIVE_FOLLOWS,
        RECEIVE_USER} from '../actions/twitch_actions.js';
import merge from 'lodash/merge';

const TwitchReducer = (state={}, action) => {
  Object.freeze(state);
  let dup = merge({}, state);
  switch(action.type){
    case RECEIVE_ALL_STREAMS:
      return action.streams;
    case RECEIVE_ALL_GAMES:
      return action.games;
    case RECEIVE_GAME:
      return action.game;
    case RECEIVE_FOLLOWS:
      return action.follows;
    case RECEIVE_USER:
      dup['user'] = action.user;
      return dup;
    default:
      return state;
  }
};

export default TwitchReducer;
