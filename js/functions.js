$(function(){
  var $titleSong          = $('h3'),
      $audioPlayer        = $('.audio-player'),
      $playButton         = $('.play-button'),
      $listItems          = $('li'),
      $listItemsContainer = $('ul'),
      $albumCove          = $('#cover'),
      tl                 = new TimelineMax();

      // $playButton.click(function(){
        tl.staggerTo($listItems,0.7,{y:"670%",ease: Expo.easeIn},-0.1)
        tl.to($albumCove,0.4,{borderRadius: "50%", height: 200, width: 200,left: "50%",x: "-50%",top:50})
        tl.to($titleSong,0.3, {x:70,y:-140})

      // });
})
