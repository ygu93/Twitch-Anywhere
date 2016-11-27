import {applyMiddleware} from 'redux';
import SessionMiddleware from './session_middleware';
import TwitchMiddleware from './twitch_middleware';

const RootMiddleware = applyMiddleware(TwitchMiddleware, SessionMiddleware);

export default RootMiddleware;
