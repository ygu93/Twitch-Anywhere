export const getGames = (success) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/games/top?limit=100',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
    },
    success
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

export const getStreams = (success) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/streams',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
    },
    success
  });
};


export const getFollows = (success) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/streams/followed',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif',
      'Authorization': `OAuth ${window.authToken}`
    },
    success

  });
};

export const getUser = (success) => {
  $.ajax({
    method:'GET',
    url: 'https://api.twitch.tv/kraken/',
    headers: {
      'Client-ID': '15vijk38vjlkj9kirhl904phbinisif',
      'Authorization': `OAuth ${window.authToken}`
    },
    success

  });
};

export const login = () => {
  // $.ajax({
  //   method:'GET',
  //   url: 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=chrome-extension://jigfnpghjghfgpjobdmecafdfnphgbnp/root.html',
  //   headers: {
  //     'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
  //   },
  //   success

  // window.open('https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=chrome-extension://jigfnpghjghfgpjobdmecafdfnphgbnp/root.html');
  window.open('https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=https://jigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org/root.html');

};
