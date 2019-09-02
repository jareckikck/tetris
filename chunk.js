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

class Piece extends Chunk {
	constructor(x, y, shape) {
		super(x, y, shape);
		this.shape = shape || [[1, 1], [1, 1]];
	}

	moveDown() {
		this.y = this.y + SPEED;
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
		let chunks = [];

		this.shape.forEach((rowY, indexY) => {
			rowY.forEach((val, indexX) => {
				if (val == 0) {
					return;
				}

				chunks.push(
					new Chunk(this.x + indexX * CHUNKSIZE, this.y + indexY * CHUNKSIZE)
				);
			});
		});

		chunks.forEach(chunk => {
			chunk.draw();
		});
	}
}
