let board = new Board(30, [10, 20]);
const CANVAS_WIDTH = board.blockSize * board.columns;
const CANVAS_HEIGHT = board.blockSize * board.rows;
const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
ctx.canvas.width = CANVAS_WIDTH;
ctx.canvas.height = CANVAS_HEIGHT;
let GAMESTATE = 0;
const STATE = {
  end: 0,
  run: 1,
  pause: 2
};
const SHAPES = {
  Oshape: [
    [1, 1],
    [1, 1]
  ],
  Ishape: [[1], [1], [1], [1]],
  Tshape: [
    [0, 1, 0],
    [1, 1, 1]
  ],
  Zshape: [
    [1, 1],
    [0, 1, 1]
  ],
  Sshape: [
    [0, 1, 1],
    [1, 1]
  ],
  Lshape: [[1], [1], [1, 1]],
  Jshape: [
    [0, 1],
    [0, 1],
    [1, 1]
  ]
};

function printPauseText() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("Pause", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
}

function printGameEndText() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 45);
  ctx.fillText("Press", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 15);
  ctx.fillText("SPACEBAR", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 15);
  ctx.fillText("to start again", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 45);
}

function timestamp() {
  return new Date().getTime();
}

function clear() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function randomShape(obj){	
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
}

function spawnPieceFrom(SHAPES){
	return new Piece(board.columns/2 - 1, 0, randomShape(SHAPES) )
	// return new Piece(board.columns/2 - 1, 0, SHAPES.Ishape )
}

function watch() {
  if (board.activePieceExist) {
    if (!activePiece.canMoveDown()) {			
      board.map(activePiece);
      board.activePieceExist = false;
    }
	}
	
  if (!board.activePieceExist) {
    activePiece = spawnPieceFrom(SHAPES);
    board.activePieceExist = true;
  }
}

function watchKeybord() {
  if (rightPressed) {
    activePiece.moveRight();
	}
	
  if (leftPressed) {
    activePiece.moveLeft();
	}
	
  if (upPressed) {
    activePiece.rotate();
  }
}