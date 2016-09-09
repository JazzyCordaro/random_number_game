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

var player1In;
var player2In;
var player3In;
var player4In;

ply1GuessCount = 0;

$(document).ready(function () {
  //click go and initiate game
  //capture information
  $('#rollDice').on('click', function () {
    numPlayers = Number($('#numPlayers').val());
    gameDifficulty = $('#difficulty').val();
    selectedDifficulty();
    setDifficulty();

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

//display #playMode
var displayGameMode = function () {
  console.log('in displayGameMode');
  console.log('numPlayers:', numPlayers);
  switch (numPlayers) {
    case 1:
      $('#playMode').append('<p>Player 1</p><p>Total guesses: <span id="ply1GuessSpan">' + ply1GuessCount + '</span></p><input id="guess1" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
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
    //capture the value of the input fields/players guesses
    var player1In = $('#guess1').val();
    var player2In = $('#guess2').val();
    var player3In = $('#guess3').val();
    var player4In = $('#guess4').val();
    console.log('player1In:', player1In);
    console.log('player2In:', player2In);
    console.log('player3In:', player3In);
    console.log('player4In:', player4In);

    //update the player guess count
    ply1GuessCount++;
    ply2GuessCount++;
    ply3uessCount++;
    ply4GuessCount++;

    $('#ply1GuessSpan').html(ply1GuessCount);

    $('#guess1').val('');
    $('#guess2').val('');
    $('#guess3').val('');
    $('#guess4').val('');
  });
};// end displayGameMode
