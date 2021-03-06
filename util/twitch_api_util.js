

export const getGames = (success, error) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/games/top?limit=100',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
    },
    success,
    error
  });
};

export const fetchStreamsOfGame = (game, success) => {
  $.ajax({
    method:'GET',
    url: `https://api.twitch.tv/kraken/streams?game=${game}`,
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
    },
    success
  });
};

export const getStreams = (success, error) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/streams',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
    },
    success,
    error
  });
};


export const getFollows = (success, error) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/streams/followed',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif',
      'Authorization': `OAuth ${window.authToken}`
    },
    success,
    error

  });
};

export const getUser = (token, success) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif',
      'Authorization': `OAuth ${token}`
    },
    success
  });
};

export const fetchUserData = (username, success) => {
  $.ajax({
    method:'GET',
    url: `https://api.twitch.tv/kraken/users/${username}`,
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif',
    },
    success
  });
};

export const login = () => {
  window.open('https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=https://ncnpbpmedijfhnahjkgnmmaphdalhfle.chromiumapp.org/&scope=user_read');
};
