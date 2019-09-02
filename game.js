/* ///////////////////////////////////////////////////////////////////////////////////////
                                    GLOBALS    
/////////////////////////////////////////////////////////////////////////////////////// */
const CANVAS_WIDTH = 200;
const CANVAS_HEIGHT = 400;
const CHUNKSIZE = 20;
const FPS = 60;
const SPEED = 5;

let keys = {}
let floor = [];

let canvasElement = $("<canvas width='" + CANVAS_WIDTH +"' height='" + CANVAS_HEIGHT + "'></canvas");
let canvas = canvasElement.get(0).getContext("2d");

/* ///////////////////////////////////////////////////////////////////////////////////////
                                     RunIt    
/////////////////////////////////////////////////////////////////////////////////////// */
initGame();
watchKeyboardInput();

setInterval(function () {
    clear();
    update();
    draw();
}, 1000 / FPS);