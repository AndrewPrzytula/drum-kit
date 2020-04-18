
let demoSounds = ["a","a","s","a","a","a","s","d","j","k","l","l","k","j","d","a","a","s","a","a","a","s","w"];


$("button").click(function() {

  var pressedButton = $(this).text()
  playMusic2(pressedButton);
  playAnimation(pressedButton)
  console.log(pressedButton);

})


$(".demo").click(function(){
playDemo();



})






function playDemo(){

demoSounds.forEach(function(sound, i){
setTimeout(function(){
playMusic2(sound);
playAnimation(sound);

},i*300)

})

}






$(document).keypress(function(event){


  playMusic2(event.key)
  playAnimation(event.key)


});







  function playMusic2(key) {



  switch (key) {
    case "w":  var audio = new Audio('sounds/crash.mp3');
    audio.play();

    break;

    case "a":  var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case "s":  var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "d":  var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "j":  var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "k":  var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "l":  var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    default:

  }
  }





  function playAnimation(key){


$("." +key).addClass("pressed");
setTimeout(function(){

$("."+key).removeClass("pressed")

},100)

};
