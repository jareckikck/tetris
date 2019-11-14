//-------------------------------------------------------------------------
// GAME LOOP
//-------------------------------------------------------------------------
window.onload = function() {
	
	function update() {
    watch();
    board.updateLines();
    activePiece.moveDown();
    clear();
  }
 
	function draw() {
    activePiece.draw();
    board.draw();
  }

  let lastFrame = 0;
  let delta = 0;
  let timestep = 10000 / 60;
  function mainLoop(timestamp) {
    var numUpdateSteps = 0;
    delta += timestamp - lastFrame;
    lastFrame = timestamp;
    while (delta >= timestep) {
      handleGameState();

      if (GAMESTATE == STATE.run) {
        watchKeybord();
        update();
        draw();
      } else if (GAMESTATE == STATE.pause) {
        printPauseText();
      } else if (GAMESTATE == STATE.end) {
        printGameEndText();
      }
      delta -= timestep;

      if (++numUpdateSteps >= 240) {
        delta = 0;
        break;
      }
    }

    requestAnimationFrame(mainLoop);
  }

  requestAnimationFrame(mainLoop);
};
