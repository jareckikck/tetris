class Chunk {
  constructor(x, y, shape) {
    this.x = x || 0;
    this.y = y || 0;
    this.shape = shape || [1];
    this.active = true;
  }

  getWidth() {    
    return this.shape.length * CHUNKSIZE;
  }

  getHeight() {
    return this.shape.length * CHUNKSIZE;    
  }

  draw(color) {
    drawBorder(this.x, this.y, this.getWidth(), this.getHeight());
    canvas.fillStyle = color ? color : "#FF0000";
    canvas.fillRect(this.x, this.y, this.getWidth(), this.getHeight());
    function drawBorder(xPos, yPos, width, height, thickness = 1) {
      canvas.fillStyle = "#fff";
      canvas.fillRect(
        xPos - thickness,
        yPos - thickness,
        width + thickness * 2,
        height + thickness * 2
      );
    }
  }
}
