var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedparser=bodyParser.urlencoded({extended: false});
var randomNumber = require('../modules/randomNumber');
var sendBackPlayers = {
  player1: 1,
  player2: 1,
  player3: 1,
  player4: 1,
};
var globalNum = 0;

app.listen('5000', 'localhost', function(){
  console.log('server is listening on port 5000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/index.html'));
});

app.post('/ranNum', urlencodedparser, function(req, res){
  console.log('ranNum hit', req.body);
  var gameNum = req.body;
  var min = Number(req.body.min);
  var max = Number(req.body.max);
  var integer = req.body.integer;
  var sendNum = randomNumber( min, max, integer);
  console.log('random number:', sendNum);
  var randoNum = {
    rando: sendNum
  };
  globalNum = sendNum;
  res.send(randoNum);

});

app.post('/playerGuess', urlencodedparser, function(req, res) {
  console.log('serverside playerGuess hit', req.body);
  var playerOne = Number(req.body.player1);
  var playerTwo = Number(req.body.player2);
  var playerThree = Number(req.body.player3);
  var playerFour = Number(req.body.player4);

console.log(globalNum);

  var compareGuesses1 = function() {
    if(playerOne === globalNum){
      console.log('efffff ya!');
      sendBackPlayers.player1 = 'winner';
    } else if(playerOne < globalNum){
      sendBackPlayers.player1 = 'low';
    } else if(playerOne > globalNum){
      sendBackPlayers.player1 = 'high';
    }
  };

  var compareGuesses2 = function() {
    if(playerTwo === globalNum){
      sendBackPlayers.player2 = 'winner';
    } else if(playerTwo < globalNum){
      sendBackPlayers.player2 = 'low';
    } else if(playerTwo > globalNum){
      sendBackPlayers.player2 = 'high';
    }
  };

  var compareGuesses3 = function() {
    if(playerThree === globalNum){
      sendBackPlayers.player3 = 'winner';
    } else if(playerThree < globalNum){
      sendBackPlayers.player3 = 'low';
    } else if(playerThree > globalNum){
      sendBackPlayers.player3 = 'high';
    }
  };

  var compareGuesses4 = function() {
    if(playerFour === globalNum){
      sendBackPlayers.player4 = 'winner';
    } else if(playerFour < globalNum){
      sendBackPlayers.player4 = 'low';
    } else if(playerFour > globalNum){
      sendBackPlayers.player4 = 'high';
    }
  };
  compareGuesses1();
  compareGuesses2();
  compareGuesses3();
  compareGuesses4();
  res.send(sendBackPlayers);
  console.log('sendbackplayers= ', sendBackPlayers);

});

app.use(express.static('public'));
