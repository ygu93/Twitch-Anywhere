$(function(){
  Twitch.init({clientId: '15vijk38vjlkj9kirhl904phbinisif'}, function(error, status) {
    // the sdk is now loaded
    if (status.authenticated) {
      // we're logged in :)
      $('.twitch-connect').hide();
    }else if (error){
      console.log(error);
    }
  });

  $('.twitch-connect').click(function() {
    Twitch.login({
      scope: ['user_read', 'channel_read']
    });
  });

});
