//-------------------------------------------------------------------------
// GAME LOOP
//-------------------------------------------------------------------------
window.onload = function() {
	let lastFrame = 0;
  let delta = 0;
	let FPS = 1000 / 60;
	
	function update() {
    watch();
    board.updateLines();
    
    clear();
  }
	
	function draw() {
    activePiece.draw();
    board.draw();
	}
	// if (GAMESTATE == STATE.run) {
		setInterval(() => {
			if (GAMESTATE == STATE.run) {
			console.log('tick tack');
			watchKeybord();
			}
		}, 100);
		setInterval(() => {
			if (GAMESTATE == STATE.run) {
			activePiece.moveDown();
			}
		}, 200);
	// }
  function mainLoop(timestamp) {
    let numUpdateSteps = 0;
    delta += timestamp - lastFrame;
		lastFrame = timestamp;
		
    while (delta >= FPS) {
      if (GAMESTATE == STATE.run) {
        
        update();
        draw();
      } else if (GAMESTATE == STATE.pause) {
        printPauseText();
      } else if (GAMESTATE == STATE.end) {
        printGameEndText();
      }
      delta -= FPS;

      if (++numUpdateSteps >= 240) {
        delta = 0;
        break;
      }
    }

    requestAnimationFrame(mainLoop);
  }

  requestAnimationFrame(mainLoop);
};
