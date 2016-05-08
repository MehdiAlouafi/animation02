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
      $playButton.click(function(){
        tl.staggerTo($listItems,0.6,{y:"670%",ease: Expo.easeInOut},-0.1)
        tl.to($albumCove,0.5,{borderRadius: "50%", height: 200, width: 200,left: "50%",x: "-50%",top:50,ease: Power1.easeOut},"-=0.8")
        tl.to($titleSong,0.7, {x:80,y:-140,ease: Power2.easeInOut},"-=1")
        tl.to($track,0.3,{opacity: 0},"-=0.7")
        tl.to($albumCove,3,{rotation:360, ease: Power0.easeOut,repeat:-1},"-=0.5")
        tl.to($listItemsTop, 0.3,{opacity: 0},0.4)

  });
})
