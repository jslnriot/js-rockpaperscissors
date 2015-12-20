var Bot = function() {
  selectionIds = [1,2,3];
}

Bot.prototype.randomResult = function(playSelectionMap) {
  randResult = selectionIds[Math.floor(Math.random() * selectionIds.length)];
  document.getElementById("bot-pick").innerHTML = "The Bot selected: " + playSelectionMap[randResult];
  return randResult;
}
