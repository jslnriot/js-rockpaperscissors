var Bot = function() {
  results = ['Rock', 'Paper', 'Scissors'];
}

Bot.prototype.randomResult = function() {
  randResult = results[Math.floor(Math.random() * results.length)];
  //console.log(randResult);
  return randResult;
}

function bot1(){
  return "hello";
}
