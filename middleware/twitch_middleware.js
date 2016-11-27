import {getGames,
        getStreams,
        fetchStreamsOfGame,
        getFollows,
        getUser,
        fetchUserData} from '../util/twitch_api_util';
import {REQUEST_ALL_STREAMS,
        REQUEST_ALL_GAMES,
        receiveAllGames,
        receiveAllStreams,
        REQUEST_GAME,
        receiveGame,
        REQUEST_FOLLOWS,
        receiveFollows,
        REQUEST_USER,
        receiveUser} from '../actions/twitch_actions.js';

const TwitchMiddleware = ({dispatch}) => next => action => {
  const receiveAllGamesSuccess = data => dispatch(receiveAllGames(data));
  const receiveAllStreamsSuccess = data => dispatch(receiveAllStreams(data));
  const receiveGameSuccess = data => dispatch(receiveGame(data));
  const receiveFollowsSuccess = data => dispatch(receiveFollows(data));
  const receiveUserSuccess = data => {
    fetchUserData(data.token.user_name, user => dispatch(receiveUser(user)));
  };

  switch(action.type){
    case REQUEST_ALL_STREAMS:
      getStreams(receiveAllStreamsSuccess);
      return next(action);
    case REQUEST_ALL_GAMES:
      getGames(receiveAllGamesSuccess);
      return next(action);
    case REQUEST_GAME:
      fetchStreamsOfGame(action.game, receiveGameSuccess);
      return next(action);
    case REQUEST_FOLLOWS:
      getFollows(receiveFollowsSuccess);
      return next(action);
    case REQUEST_USER:
      getUser(action.token, receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default TwitchMiddleware;
