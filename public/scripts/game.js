console.log('game.js sourced');

//global variables
var players = [];
var numPlayers = 0;
var guessCounter = 0;
var gameDifficulty = '';

var player1In;
var player2In;
var player3In;
var player4In;

$(document).ready(function () {
  //click go and initiate game
  //capture information
  $('#rollDice').on('click', function () {
    numPlayers = Number($('#numPlayers').val());
    gameDifficulty = $('#difficulty').val();

    // hide the #setup div
    $('#setup').fadeOut(1000, function () {
      $('#setup').remove();
      console.log('numPlayers:', numPlayers);
      console.log('gameDifficulty:', gameDifficulty);
      displayGameMode();
    });

  });//en rollDice click

  $('#restart').on('click', function () {
      console.log('restarting...');
      window.location.reload();
    }); // end restart click
});//end doc ready

//display #playMode
var displayGameMode = function () {
  console.log('in displayGameMode');
  console.log('numPlayers:', numPlayers);
  switch (numPlayers) {
    case 1:
      $('#playMode').append('<p>Player 1</p><input id="guess1" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    case 2:
      $('#playMode').append('<p>Player 1</p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><input id="guess2" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    case 3:
      $('#playMode').append('<p>Player 1</p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><input id="guess2" type="text" value="" placeholder="Guess a #"><p>Player 3</p><input id="guess3" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    default:
      $('#playMode').append('<p>Player 1</p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><input id="guess2" type="text" value="" placeholder="Guess a #"><p>Player 3</p><input id="guess3" type="text" value="" placeholder="Guess a #"><p>Player 4</p><input id="guess4" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
  } // end switch

  $('#submitGuesses').on('click', function () {
    var player1In = $('#guess1').val();
    var player2In = $('#guess2').val();
    var player3In = $('#guess3').val();
    var player4In = $('#guess4').val();
    console.log('player1In:', player1In);
    console.log('player2In:', player2In);
    console.log('player3In:', player3In);
    console.log('player4In:', player4In);

    $('#guess1').val('');
    $('#guess2').val('');
    $('#guess3').val('');
    $('#guess4').val('');
  });
};// end displayGameMode
