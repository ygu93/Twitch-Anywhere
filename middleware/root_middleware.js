import {applyMiddleware} from 'redux';
// import SessionMiddleware from './session_middleware';
import TwitchMiddleware from './twitch_middleware';

const RootMiddleware = applyMiddleware(TwitchMiddleware);

export default RootMiddleware;
