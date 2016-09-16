function Platform(group, xCoordinate, yCoordinate) {
  this.sprite = group.create(xCoordinate, yCoordinate, 'ground');
  this.sprite.body.immovable = true;
}
