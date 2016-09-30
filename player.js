function Player(game) {
  this.game = game;
  this.sprite = this.game.add.sprite(100, 100, 'dude');

  this.game.physics.arcade.enable(this.sprite);
  this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON);
}

Player.prototype.create = function() {
  this.sprite.body.bounce.y = 0.2;
  this.sprite.body.gravity.y = 300;
  this.sprite.body.collideWorldBounds = true;

  this.sprite.animations.add('left', [0, 1, 2, 3], 10, true);
  this.sprite.animations.add('right', [5, 6, 7, 8], 10, true);
}

Player.prototype.update = function(cursors) {
  this.sprite.body.velocity.x = 0;

  if (cursors.left.isDown) {
    this.sprite.body.velocity.x = -150;
    this.sprite.animations.play('left');
  }
  else if (cursors.right.isDown) {
    this.sprite.body.velocity.x = 150;
    this.sprite.animations.play('right');
  }
  else {
    this.sprite.animations.stop();
    this.sprite.frame = 4;
  }
  
  if (cursors.up.isDown && this.sprite.body.touching.down) {
    this.sprite.body.velocity.y = -350;
  }
}
