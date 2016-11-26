chrome.storage.local.get('authToken', function(result){
  if(result.authToken){
    window.authToken = result.authToken;
  }
});

export const auth = () => {
  chrome.identity.launchWebAuthFlow(
  {'url':'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=15vijk38vjlkj9kirhl904phbinisif&redirect_uri=https://jigfnpghjghfgpjobdmecafdfnphgbnp.chromiumapp.org/root.html', 'interactive':true},
  function(redirectUrl){
    chrome.storage.local.set({'authToken': redirectUrl.match(/access_token=([^&]*)/)[1]});
    console.log(redirectUrl);
    console.log(redirectUrl.match(/access_token=([^&]*)/)[1]);
    chrome.storage.local.get('authToken', function(result){
      window.authToken = result.authToken;
    });
  }
);
};
