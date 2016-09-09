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
var responses ={
  player1:'no guess made yet',
  player2:'no guess made yet',
  player3:'no guess made yet',
  player4:'no guess made yet',
};
var player1In;
var player2In;
var player3In;
var player4In;
var playerGuesses = {
  player1: player1In,
  player2: player2In,
  player3: player3In,
  player4: player4In
};

ply1GuessCount = 0;
ply2GuessCount = 0;
ply3GuessCount = 0;
ply4GuessCount = 0;


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

var getPlayerGuess = function() {
  $.ajax({
    type: 'POST',
    url: '/playerGuess',
    data: playerGuesses,
    success: function(data){
      data.player1 = responses.player1;
      data.player2 = responses.player2;
      data.player3 = responses.player3;
      data.player4 = responses.player4;
      console.log('sent from server:', data);
    }

  });
};

var setDifficulty = function() {
  $.ajax({
    type: 'POST',
    url: '/ranNum',
    data: objectToSend,
    success: function(data){

    }

  });
};

//display #playMode
var displayGameMode = function () {
  // console.log('in displayGameMode');
  console.log('numPlayers:', numPlayers);
  switch (numPlayers) {
    case 1:
      $('#playMode').append('<p>Player 1</p><p>Total guesses: <span id="ply1GuessSpan">' + ply1GuessCount + '</span></p><input id="guess1" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    case 2:
      $('#playMode').append('<p>Player 1</p><p>Total guesses: <span id="ply1GuessSpan">' + ply1GuessCount + '</span></p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><p>Total guesses: <span id="ply2GuessSpan">' + ply2GuessCount + '</span></p><input id="guess2" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    case 3:
      $('#playMode').append('<p>Player 1</p><p>Total guesses: <span id="ply1GuessSpan">' + ply1GuessCount + '</span></p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><p>Total guesses: <span id="ply2GuessSpan">' + ply2GuessCount + '</span></p><input id="guess2" type="text" value="" placeholder="Guess a #"><p>Player 3</p><p>Total guesses: <span id="ply3GuessSpan">' + ply3GuessCount + '</span></p><input id="guess3" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
      break;
    default:
      $('#playMode').append('<p>Player 1</p><p>Total guesses: <span id="ply1GuessSpan">' + ply1GuessCount + '</span></p><input id="guess1" type="text" value="" placeholder="Guess a #"><p>Player 2</p><p>Total guesses: <span id="ply2GuessSpan">' + ply2GuessCount + '</span></p><input id="guess2" type="text" value="" placeholder="Guess a #"><p>Player 3</p><p>Total guesses: <span id="ply3GuessSpan">' + ply3GuessCount + '</span></p><input id="guess3" type="text" value="" placeholder="Guess a #"><p>Player 4</p><p>Total guesses: <span id="ply4GuessSpan">' + ply4GuessCount + '</span></p><input id="guess4" type="text" value="" placeholder="Guess a #"><br><button id="submitGuesses">Take a guess</button>');
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
      playerGuesses.player1 = player1In;
      playerGuesses.player2 = player2In;
      playerGuesses.player3 = player3In;
      playerGuesses.player4 = player4In;
      //update the player guess count
      ply1GuessCount++;
      ply2GuessCount++;
      ply3GuessCount++;
      ply4GuessCount++;
      console.log(ply4GuessCount);

      //set the html content for each players total guesses
      $('#ply1GuessSpan').html(ply1GuessCount);
      $('#ply2GuessSpan').html(ply2GuessCount);
      $('#ply3GuessSpan').html(ply3GuessCount);
      $('#ply4GuessSpan').html(ply4GuessCount);
    $('#guess1').val('');
    $('#guess2').val('');
    $('#guess3').val('');
    $('#guess4').val('');
    getPlayerGuess();
  });
};// end displayGameMode
