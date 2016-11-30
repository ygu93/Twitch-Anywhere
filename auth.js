export const bindToken = (cb) => {
  chrome.storage.local.get('authToken', function(result){
    if(result.authToken){
      window.authToken = result.authToken;
      if(cb){
        cb(window.authToken);
      }
    }else{
      cb();
    }
  });
};

export const removeToken = () => {
  chrome.storage.local.set({'authToken': null});
};

export const setToken = (redirectUrl) => {
  chrome.storage.local.set({'authToken': redirectUrl.match(/access_token=([^&]*)/)[1]});
};


export const auth = (cb) => {
  chrome.identity.launchWebAuthFlow(
  {'url':'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=https://jigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org/', 'interactive':true},
  function(redirectUrl){
    chrome.storage.local.set({'authToken': redirectUrl.match(/access_token=([^&]*)/)[1]});
    bindToken(cb);
  }
);
};
