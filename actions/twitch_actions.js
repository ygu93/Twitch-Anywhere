export const REQUEST_ALL_GAMES = 'REQUEST_ALL_GAMES';
export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const REQUEST_ALL_STREAMS = 'REQUEST_ALL_STREAMS';
export const RECEIVE_ALL_STREAMS = 'RECEIVE_ALL_STREAMS';
export const REQUEST_GAME = 'REQUEST_GAME';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const REQUEST_FOLLOWS = 'REQUEST_FOLLOWS';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const RECEIVE_LOGOUT  = 'RECEIVE_LOGOUT';
export const RECEIVE_CLEAR = 'RECEIVE_CLEAR';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const requestAllGames = () => ({
  type: REQUEST_ALL_GAMES
});

export const receiveAllGames = (games) => ({
  type: RECEIVE_ALL_GAMES,
  games
});

export const requestAllStreams = () => ({
  type: REQUEST_ALL_STREAMS
});

export const receiveAllStreams = (streams) => ({
  type: RECEIVE_ALL_STREAMS,
  streams
});

export const requestGame = (game) => ({
  type:REQUEST_GAME,
  game
});

export const receiveGame = (game) => ({
  type: RECEIVE_GAME,
  game
});

export const requestFollows = () => ({
  type: REQUEST_FOLLOWS
});

export const receiveFollows = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows
});

export const requestUser = (token) => ({
  type: REQUEST_USER,
  token
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveLogin = () => ({
  type: RECEIVE_LOGIN,
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const receiveClear = () => ({
  type: RECEIVE_CLEAR
});

export const receiveErrors = () => ({
  type: RECEIVE_ERRORS
});
