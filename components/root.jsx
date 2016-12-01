import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import TopStreamsIndexContainer from './top_streams/top_streams_index_container';
import {requestAllStreams,
        requestAllGames,
        requestGame,
        requestFollows,
        requestUser,
        receiveClear} from '../actions/twitch_actions';
import GamesIndexContainer from './games/games_index_container';
import GameDetailsContainer from './games/game_details_container';
import FollowedStreamsIndexContainer from './followed/followed_streams_index_container';

const Root = ({ store }) => {
  const requestStreamsIndex = () => store.dispatch(requestAllStreams());
  const requestGamesIndex = () => store.dispatch(requestAllGames());
  const requestSingleGame = (nextState) => store.dispatch(requestGame(nextState.params.gameName));
  const checkUser = () => {
    if(window.authToken){
      store.dispatch(requestUser(window.authToken));
    }
  };

  const requestFollowedStreams = () => {
    if(window.authToken){
      store.dispatch(requestFollows());
    }else{
      store.dispatch(receiveClear());
    }
  };


  return(

    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="streams" component={TopStreamsIndexContainer} onEnter={requestStreamsIndex}/>
            <Route path="games" component={GamesIndexContainer} onEnter={requestGamesIndex}/>
            <Route path="games/:gameName" component={GameDetailsContainer} onEnter={requestSingleGame}/>
            <Route path="followed" component={FollowedStreamsIndexContainer} onEnter={requestFollowedStreams}/>
          </Route>
      </Router>
    </Provider>
);
};

export default Root;
