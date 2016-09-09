var express=require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var urlencodedparser=bodyParser.urlencoded({extended: false});
var randomNumber = require('../modules/randomNumber');

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
  res.send(randoNum);

});

app.use(express.static('public'));
