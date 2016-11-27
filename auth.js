export const bindToken = (cb) => {
  chrome.storage.local.get('authToken', function(result){
    if(result.authToken){
      console.log('now its here');
      window.authToken = result.authToken;
      if(cb){
        cb(window.authToken);
        console.log('reaches cb on click');
      }
    }
  });
};

export const removeToken = () => {
  chrome.storage.local.set({'authToken': null});
}


export const auth = (cb) => {
  chrome.identity.launchWebAuthFlow(
  {'url':'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=https://jigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org/root.html', 'interactive':true},
  function(redirectUrl){
    console.log(redirectUrl);
    chrome.storage.local.set({'authToken': redirectUrl.match(/access_token=([^&]*)/)[1]});
    bindToken(cb);
    console.log('reaches end of auth cb');
  }
);
};
