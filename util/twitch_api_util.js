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

export const login = (success) => {
  // $.ajax({
  //   method:'GET',
  //   url: 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=chrome-extension://jigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org/root.html',
  //   headers: {
  //     'Client-ID': '15vijk38vjlkj9kirhl904phbinisif'
  //   },
  //   success
  // });
  window.open('https://passport.twitch.tv/authentications/new?client_id=15vijk38vjlkj9kirhl904phbinisif&nonce=39aaad721f232d419c32f2bd7f1ec7cdfa95e27e&redirect_uri=chrome-extension%3A%2F%2Fjigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org%2Froot.html&response_type=token');
};
