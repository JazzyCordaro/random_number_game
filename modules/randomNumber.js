var numberSelect = function( min, max, integer ){
  var numberGot = Math.random() * (max - min) + min;
  if (integer){
    numberGot = Math.floor( numberGot );
  }
  return numberGot;
};
module.exports=numberSelect;
