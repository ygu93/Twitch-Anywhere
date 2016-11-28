$(function(){
  Twitch.init({clientId: '15vijk38vjlkj9kirhl904phbinisif'}, function(error, status) {
    // the sdk is now loaded
    if (status.authenticated) {
      // we're logged in :)
      $('.twitch-connect').hide();
    }else if (error){
    }
  });

  // $('.twitch-connect').click(function() {
  //   Twitch.login({
  //     redirect_uri:'chrome-extension://jigfnpghjghfgpjobdmecafdfnphgbnp/root.html',
  //     scope: ['user_read', 'channel_read']
  //   });
  // });

});
