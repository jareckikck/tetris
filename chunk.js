class Chunk {
  constructor(x, y, shape) {
    this.x = x || 0;
    this.y = y || 0;
    this.shape = shape || [1];
    this.active = true;
  }

  draw(color) {		
		let xPos = this.x * board.blockSize;
		let yPos = this.y * board.blockSize;

    drawBorder(xPos, yPos, board.blockSize, board.blockSize);
		ctx.fillStyle = color ? color : "#FF0000";
    ctx.fillRect(xPos , yPos, board.blockSize, board.blockSize);

    function drawBorder(xPos, yPos, width, height, thickness = 1) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(
        xPos - thickness,
        yPos - thickness,
        width + thickness * 2,
        height + thickness * 2
      );
    }
  }
}
