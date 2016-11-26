import React from 'react';
import {RECEIVE_ALL_STREAMS, RECEIVE_ALL_GAMES, RECEIVE_GAME} from '../actions/twitch_actions.js';
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
    default:
      return state;
  }
};

export default TwitchReducer;
