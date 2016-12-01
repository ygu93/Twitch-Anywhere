export const bindToken = (cb) => {
  chrome.storage.sync.get('authToken', function(result){
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
  chrome.storage.sync.set({'authToken': null});
};

export const setToken = (redirectUrl) => {
  chrome.storage.sync.set({'authToken': redirectUrl.match(/access_token=([^&]*)/)[1]});
};
