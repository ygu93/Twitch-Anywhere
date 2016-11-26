import {combineReducers} from 'redux';
import TwitchReducer from './twitch_reducer.js';

export default combineReducers({twitch: TwitchReducer
});
