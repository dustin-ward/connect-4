function Board(x, y) {
  this.cols = x;
  this.rows = y;

  this.grid = new Array(this.rows);
  for(let i = 0; i < this.grid.length; i++) {
    this.grid[i] = new Array(this.cols);
  }

  for(let i = 0; i < this.rows; i++) {
    for(let j = 0; j < this.cols; j++) {
      this.grid[i][j] = new Tile(j * w, i * w);
    }
  }

  this.show = function() {
    for(let i = 0; i < this.rows; i++) {
      for(let j = 0; j < this.cols; j++) {
        this.grid[i][j].show();
      }
    }
  };
}
