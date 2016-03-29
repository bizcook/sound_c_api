
window.onload = function() {
  SC.initialize({
  client_id: '6ed0c8101f3998dbac27b8cef06a5709'
});

var track_url = 'https://soundcloud.com/jonbellion/2-rocking-chairs';
SC.stream('/tracks/124113373').then(function(player){
  player.play();
});
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});
    };
