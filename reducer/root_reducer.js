import {combineReducers} from 'redux';
import TwitchReducer from './twitch_reducer.js';
import SessionReducer from './session_reducer';

export default combineReducers({
  twitch: TwitchReducer,
  session: SessionReducer
});
