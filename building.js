function Building(game) {
  this.game = game;
  this.group = this.game.add.group();

  this.group.enableBody = true;
}

Building.prototype.create = function() {
  var blueprint = [
    "********************",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                  *",
    "********    ********",
    "*                  *",
    "*                   ",
    "*                   ",
  ];
  blueprint = blueprint.reverse();

  var currentYValue = this.game.world.height - 97;
  for (var i = 0; i < blueprint.length; i++) {

    var currentXValue = 0;
    var floor = blueprint[i];
    for (var j = 0; j < floor.length; j++) {
      if (floor[j] === "*") {
        var tile = this.group.create(currentXValue, currentYValue, 'brownsquare');
        tile.body.immovable = true;
      }
      currentXValue = currentXValue + 32;
    }

    currentYValue = currentYValue - 32;
  }
}

Building.prototype.update = function(spaceKey) {
  if (spaceKey.isDown) {
    this.group.forEach(goCrazy, this);
  }
}

function goCrazy(tile) {
  tile.body.immovable = false;
  tile.body.gravity.y = 300;
  tile.body.bounce.y = 0.7 + Math.random() * 0.2;
  tile.body.collideWorldBounds = true;
}
