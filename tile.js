function Tile(x, y) {
  this.x = x;
  this.y = y;
  this.state = "EMPTY";

  this.set = function(newState) {
    this.state = newState;
  };

  this.show = function() {
    if(this.state == "RED") {
      fill(255, 0, 0);
    }
    else if(this.state == "BLUE") {
      fill(0, 0, 255);
    }
    else {
      fill(255, 255, 255);
    }
    ellipseMode(CORNER);
    ellipse(x, y, 60, 60);
  };
}
