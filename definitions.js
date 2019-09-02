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

function clear() {
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function update() {
	updatePiece();
	activePieces.forEach(piece => {
    piece.update(); 
	});
}
function draw() {
	Pieces.forEach(piece => {
		piece.draw();
	});
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

function updatePiece() {
	activePieces = Pieces.filter(piece => {
		return piece.isActive();
  });
  
	if (!activePieces.length) {
		existActivePiece = false;
	}

	if (!existActivePiece) {
		if (Math.floor(Math.random() * 11) < 5) {
		  shape = [[1,1],[1,1]];
		  Pieces.push(new Piece(40,0,shape));
		  console.log('O');		
		} else {
		  shape = [[1,0],[1,0],[1,0],[1,0]];
		  Pieces.push(new Piece(40,0,shape));
		  console.log('I');
		}
		existActivePiece = true;
	}
}
