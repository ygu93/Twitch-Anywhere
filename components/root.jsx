import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import TopStreamsIndexContainer from './top_streams/top_streams_index_container';
import {requestAllStreams, requestAllGames, requestGame} from '../actions/twitch_actions';
import GamesIndexContainer from './games/games_index_container';
import GameDetailsContainer from './games/game_details_container';

const Root = ({ store }) => {
  const requestStreamsIndex = () => store.dispatch(requestAllStreams());
  const requestGamesIndex = () => store.dispatch(requestAllGames());
  const requestSingleGame = (nextState) => store.dispatch(requestGame(nextState.params.gameName));
  return(

    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="streams" component={TopStreamsIndexContainer} onEnter={requestStreamsIndex}/>
            <Route path="games" component={GamesIndexContainer} onEnter={requestGamesIndex}/>
            <Route path="games/:gameName" component={GameDetailsContainer} onEnter={requestSingleGame}/>
          </Route>
      </Router>
    </Provider>
);
};

export default Root;
