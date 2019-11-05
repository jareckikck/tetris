class Piece extends Chunk {
  constructor(x, y, shape) {
    super(x, y, shape);
    this.shape = shape || [[1, 1], [1, 1]];
    this.chunks;
  }
  getWidth() {
    let width = 0;
    let current = 0;
    this.shape.forEach( el => {
      el.forEach( v => {
        if (v == 0) return;
        current++;
      });
      if (current < width) return;
      width = current;
      current = 0;
    });

    return width * CHUNKSIZE;
  }
  fallDown() {
    this.y = this.y + (CHUNKSIZE / FPS) * SPEED;
  }

  moveDown() {
    this.y = this.y + (CHUNKSIZE / FPS) * 10;
  }
  moveRight() {
    this.x =
      this.x < CANVAS_WIDTH - this.getWidth() ? (this.x += CHUNKSIZE) : this.x;
  }

  moveLeft() {
    this.x = this.x >= CHUNKSIZE ? (this.x -= CHUNKSIZE) : this.x;
  }

  isActive() {
    return this.getHeight() + this.y < CANVAS_HEIGHT;
  }

  update() {
    if (this.isActive()) {
      this.fallDown();
    }
  }

  getCenterPoint() {
    let centerX, centerY;
    centerX = (2 * this.x + this.rowsX * CHUNKSIZE) / 2;
    centerY = (2 * this.y + this.rowsY * CHUNKSIZE) / 2;
    return { centerX, centerY };
  }

  draw() {
    this.chunks = [];

    this.shape.forEach((rowY, indexY) => {
      rowY.forEach((val, indexX) => {
        if (val == 0) {
          return;
        }

        this.chunks.push(
          new Chunk(this.x + indexX * CHUNKSIZE, this.y + indexY * CHUNKSIZE)
        );
      });
    });

    this.chunks.forEach(chunk => {
      chunk.draw();
    });
  }
}
