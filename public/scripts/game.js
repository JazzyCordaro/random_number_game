console.log('game.js sourced');

//global variables
var players = [];
var numPlayers = 0;
var guessCounter = 0;
var gameDifficulty = '';
var objectToSend = {
  min: 1,
  max: 10,
  integer: true
};


console.log('numPlayers:', numPlayers);


$(document).ready(function () {
  //capture information
  $('#rollDice').on('click', function () {
    console.log('in rollDice click');
    numPlayers = $('#numPlayers').val();
    gameDifficulty = $('#difficulty').val();
    selectedDifficulty();
    setDifficulty();
    $('#setup').slideUp(1000, function () {
      $('#setup').remove();
      console.log('numPlayers:', numPlayers);
      console.log('gameDifficulty:', gameDifficulty);
    });

// var selectedDifficulty = function() {
//   if(gameDifficulty === 'medium'){
//     objectToSend.max = 100;
//   }else if(gameDifficulty === 'hard'){
//     objectToSend.max = 1000;
//     console.log('game difficult is:', gameDifficulty);
//     console.log('max is:', objectToSend.max);
//     }
//   };






    //click go and initiate game
    //hide the #setup div
    //display #playMode
  });//en rollDice click
});//end doc ready

var selectedDifficulty = function() {
  if(gameDifficulty === 'medium'){
    objectToSend.max = 100;
  }else if(gameDifficulty === 'hard'){
    objectToSend.max = 1000;
    console.log('game difficult is:', gameDifficulty);
    console.log('max is:', objectToSend.max);
    }
  };

var setDifficulty = function() {
  $.ajax({
    type: 'POST',
    url: '/ranNum',
    data: objectToSend,
    success: function(data){
      console.log('sent from server:', data);
    }

  });
};
