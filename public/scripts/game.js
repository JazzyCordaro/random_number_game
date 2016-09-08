console.log('game.js sourced');

//global variables
var players = [];
var guessCounter = 0;
var setup = $('#setup');

var remove = function () {
  setup.remove();
};

$(document).ready(function () {
  console.log('jquery works');


$('#rollDice').on('click', function () {
  console.log('in rollDice click');
  setup.slideUp(1000, remove);

  //click go and initiate game
  //hide the #setup div
  //display #playMode
});//en rollDice click

});//end doc ready
