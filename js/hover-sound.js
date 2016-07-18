  // function musicHover() {
  //     $(".feature").hover(
  //         function() {
  //             sound = $(this).children()[0];
  //             sound.play();
  //         }, function() {
  //             sound.pause();
  //             sound.currentTime = 0;
  //         }
  //     );
  //   }




  $(".step1").mouseenter(function(){
  	$("<audio></audio>").attr({
  		'src':'https://allthingsaudio.wikispaces.com/file/view/Crazy%20game%20.mp3/139084133/Crazy%20game%20.mp3',
  		'volume':1,
  		'autoplay':'autoplay'
  	}).appendTo("body");
    console.log("helllasdfasf");
  });



$(".step2").mouseenter(function(){
	$("<audio></audio>").attr({
		'src':'https://allthingsaudio.wikispaces.com/file/view/Shuffle%20for%20K.M.mp3/139190697/Shuffle%20for%20K.M.mp3',
		'volume':1,
		'autoplay':'autoplay'
	}).appendTo("body");
  console.log("helllasdfasf");
});
