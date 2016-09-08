var express=require('express');

var app=express();

var path=require('path');

var bodyParser=require('body-parser');

var urlencodedparser=bodyParser.urlencoded({extended: false});

app.listen('5000', 'localhost', function(){
  console.log('server is listening on port 5000');
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.send('Hello from the server!!!');
});
