/* ///////////////////////////////////////////////////////////////////////////////////////
                                     Definitions    
/////////////////////////////////////////////////////////////////////////////////////// */
const SHAPES = {
  Oshape: [[1, 1], [1, 1]],
  Ishape: [[1], [1], [1], [1]],
  Tshape: [[0, 1, 0], [1, 1, 1]],
  Zshape: [[1, 1], [0, 1, 1]],
  Sshape: [[0, 1, 1], [1, 1]],
  Lshape: [[1], [1], [1, 1]],
  Jshape: [[0, 1], [0, 1], [1, 1]]
};

function initGame() {
  $(document).ready(function() {
    $(".game-window").append(canvasElement);
  });
}
function watchKeyboardInput() {
  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  });
  $(document).keyup(function(e) {
    delete keys[e.keyCode];
    repeat = false;
  });
}

function movePiece() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 65) {
      if (!repeat) {
        repeat = true;
        console.log("A");
        activePiece.moveLeft();
      }
    }
    if (direction == 87) {
      console.log("W");
    }
    if (direction == 68) {
      console.log("D");
      if (!repeat) {
        repeat = true;
        activePiece.moveRight();
      }
    }
    if (direction == 83) {
      console.log("S");
      activePiece.moveDown();
    }
    if (direction == 69) {
    }
  }
}

function clear() {
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update() {
  updatePiece();
  activePiece.update();
  movePiece();
}
function draw() {
  floor.forEach(piece => {
    piece.draw();
  });
  activePiece.draw();
}

function collides(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function handleCollisions() {}

function spawnNextPiece() {
  if (Math.floor(Math.random() * 11) < 5) {
    shape = SHAPES.Lshape;
  } else {
    shape = SHAPES.Jshape;
  }
  return shape;
}

let existActivePiece = false;
function updatePiece() {
  if (!existActivePiece) {
    activePiece = new Piece(40, 0, spawnNextPiece());
    existActivePiece = true;
  }

  if (!activePiece.isActive()) {
    floor.push(...activePiece.chunks);
    existActivePiece = false;
  }
}
