function StarCollection(game) {
  this.game = game;
  this.group = this.game.add.group();

  this.group.enableBody = true;
}

StarCollection.prototype.create = function() {
  for (var i = 0; i < 12; i++) {
    new Star(this.group, i * 70, 0);
  }
}
