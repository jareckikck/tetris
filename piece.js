class Piece extends Chunk {
	constructor(x, y, shape) {
		super(x, y, shape);
		this.shape = shape || [[1, 1], [1, 1]];
		this.chunks;
	}

	moveDown() {
    this.y = this.y + CHUNKSIZE / FPS * SPEED;
	}
  moveRight(){
    console.log(this.getWidth());
    this.x = this.x <=  CANVAS_WIDTH - this.getWidth() ? this.x+=5: this.x;

  }
  moveLeft(){
    console.log(this.x);
    this.x = this.x >= 0 ? this.x -= 5: this.x ;
    
  }
	isActive() {
		return this.getHeight() + this.y < CANVAS_HEIGHT;
	}

	update() {
		if (this.isActive()) {
			this.moveDown();
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
