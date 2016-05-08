$(function(){
  var $titleSong          = $('h3'),
      $audioPlayer        = $('.audio-player'),
      $playButton         = $('.play-button'),
      $listItems          = $('li'),
      $listItemsContainer = $('ul'),
      $albumCove          = $('#cover'),
      $track              = $('.track'),
      $listItemsTop       = $('.list-items-top'),
      tl                  = new TimelineMax();
      tl.staggerTo($listItems,0.6,{y:"670%",ease: Expo.easeInOut},-0.1)
      tl.to($albumCove,0.5,{borderRadius: "50%", height: 200, width: 200,left: "50%",x: "-50%",top:80,ease: Power1.easeOut},"-=0.8")
      tl.to($titleSong,0.7, {x:80,y:-140,ease: Power2.easeInOut},"-=1")
      tl.to($track,0.3,{opacity: 0},"-=0.7")
      tl.to($albumCove,3,{rotation:360, ease: Power0.easeOut,repeat:-1},"-=0.5")
      tl.to($listItemsTop, 0.3,{opacity: 0},0.4)
      tl.to($playButton,0.4,{x:-130,y: -10},0.3)
      tl.to($('.list-items'),0.4,{y:90},0.6)
      tl.to($('.control-player'),0.4,{opacity:1},1)
      tl.pause()
      tl.reversed(true);
      function toggleDirection()
      {
        tl.reversed() ? tl.play() : tl.reverse(0.8);
      }
      $playButton.click(function(){
        toggleDirection()
  });
})
