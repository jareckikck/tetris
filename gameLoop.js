//-------------------------------------------------------------------------
// GAME LOOP
//-------------------------------------------------------------------------
window.onload = function() {

	let lastFrame = 0;
  let delta = 0;
	let FPS = 1000 / 600;
	
	function update() {
    watch();
    board.updateLines();		
    clear();
  }
	
	function draw() {
		if(activePiece){
			activePiece.draw();
		}
    board.draw();
	}
		setInterval(() => {
			if (GAMESTATE == STATE.run) {
			watchKeybord();
			}
		}, 100);
		setInterval(() => {
			if (GAMESTATE == STATE.run) {
				if(activePiece){
					activePiece.moveDown();
				}
			}
		}, 200);
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
