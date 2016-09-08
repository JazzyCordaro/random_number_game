console.log('game.js sourced');

//global variables
var players = [];
var numPlayers = 0;
var guessCounter = 0;
var gameDifficulty = '';

console.log('numPlayers:', numPlayers);


$(document).ready(function () {
  //capture information
  $('#rollDice').on('click', function () {
    console.log('in rollDice click');
    numPlayers = $('#numPlayers').val();
    gameDifficulty = $('#difficulty').val();
    $('#setup').slideUp(1000, function () {
      $('#setup').remove();
      console.log('numPlayers:', numPlayers);
      console.log('gameDifficulty:', gameDifficulty);
    });


    //click go and initiate game
    //hide the #setup div
    //display #playMode
  });//en rollDice click
});//end doc ready
