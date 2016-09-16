function Star(group, xCoordinate, yCoordinate) {
  this.sprite = group.create(xCoordinate, yCoordinate, 'star');

  this.sprite.body.gravity.y = 300;
  this.sprite.body.bounce.y = 0.7 + Math.random() * 0.2;
}
