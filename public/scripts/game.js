console.log('game.js sourced');

$( document ).ready(function(){
  console.log('doc ready');
  var objectToSend = {
    min: 1,
    max: 10,
    integer: true
  };
  $.ajax({
    type: 'POST',
    url: '/ranNum',
    data: objectToSend,
    success: function(data){
      // console.log(data);
    }
  });




}); // end doc rdy
