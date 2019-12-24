let w = 60;
let board = new Board(7, 6);
let turn = true;
let selectedCol;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  board.show();

  for(let i = 0; i < w * board.cols; i += w) {
    if(mouseX >= i && mouseX < i + w) {
      fill(255, 255, 255, 75);
      noStroke();
      rect(i, 0, w, height);
      selectedCol = i/w;
    }

  }

  if(checkWin()) {

  }
}

function mouseClicked() {
  for(let j = board.rows-1; j >= 0; j--) {
    if(board.grid[j][selectedCol].state == "EMPTY") {
      if(turn) {
        board.grid[j][selectedCol].state = "BLUE";
      }
      else {
        board.grid[j][selectedCol].state = "RED";
      }
      turn = !turn;
      break;
    }
  }
}

function checkWin() {
  for(let i = board.rows-1; i >= 0; i--) {
    for(let j = 0; j < board.cols; j++) {

      

    }
  }
}
