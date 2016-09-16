function Platforms(game) {
  this.game = game;
  this.group = this.game.add.group();

  this.group.enableBody = true;
}

Platforms.prototype.create = function() {
  var ground = new Platform(this.group, 0, this.game.world.height - 64);
  ground.sprite.scale.setTo(2, 2);

  new Platform(this.group, 400, 400);
  new Platform(this.group, -150, 250);
}
