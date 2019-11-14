let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;
const KEYBOARD = {
  left: 65,
  right: 68,
  up: 87,
  down: 83,
  space: 32
};
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode == KEYBOARD.right) {
		rightPressed = true;
  } else if (event.keyCode == KEYBOARD.left) {
		leftPressed = true;
  }
  if (event.keyCode == KEYBOARD.down) {
    downPressed = true;
  } else if (event.keyCode == KEYBOARD.up) {
    upPressed = true;
  }
  if (event.keyCode == KEYBOARD.space) {
    spacePressed = true;
  }
}
function keyUpHandler(event) {
  if (event.keyCode == KEYBOARD.right) {
		rightPressed = false;
  } else if (event.keyCode == KEYBOARD.left) {
		leftPressed = false;
  }
  if (event.keyCode == KEYBOARD.down) {
    downPressed = false;
  } else if (event.keyCode == KEYBOARD.up) {
    upPressed = false;
  }
  if (event.keyCode == KEYBOARD.space) {
    spacePressed = false;
    GAMESTATE = GAMESTATE !== 1 ? 1 : 2;
  }
}
function watchKeybord() {
  if (rightPressed) {
    activePiece.moveRight();
  }
  if (leftPressed) {
    activePiece.moveLeft();
	}
	if(upPressed){
		activePiece.rotate();
	}
}
