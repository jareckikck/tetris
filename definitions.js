/* ///////////////////////////////////////////////////////////////////////////////////////
                                     Definitions    
/////////////////////////////////////////////////////////////////////////////////////// */
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
  });
}

function movePiece() {
  for (var direction in keys) {
    if (!keys.hasOwnProperty(direction)) continue;
    if (direction == 65) {
      console.log("A");
      activePiece.moveLeft();
    }
    if (direction == 87) {
      console.log("W");
    }
    if (direction == 68) {
      console.log("D");
      activePiece.moveRight();
    }
    if (direction == 83) {
      console.log("S");
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

// let activePiece.isActive();
let existActivePiece = false;
function updatePiece() {
  if (!existActivePiece) {
    if (Math.floor(Math.random() * 11) < 5) {
      shape = [[1, 1], [1, 1]];
      console.log("O");
    } else {
      shape = [[1, 0], [1, 0], [1, 0], [1, 0]];
      console.log("I");
    }
    activePiece = new Piece(40, 0, shape);
    existActivePiece = true;
  }

  if (!activePiece.isActive()) {
    floor.push(...activePiece.chunks);
    existActivePiece = false;
  }
}
