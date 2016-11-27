import {getUser,
        fetchUserData} from '../util/twitch_api_util';
import {REQUEST_USER,
        receiveUser,
        receiveLogin} from '../actions/twitch_actions.js';

const SessionMiddleware = ({dispatch}) => next => action => {
  const receiveUserSuccess = data => {
    dispatch(receiveLogin(window.authToken));
    fetchUserData(data.token.user_name, user => {
      dispatch(receiveUser(user));
    });
  };

  switch(action.type){
    case REQUEST_USER:
      getUser(action.token, receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }

};

export default SessionMiddleware;
