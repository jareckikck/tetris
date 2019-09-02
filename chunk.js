class Chunk {
	constructor(x, y, rowsX, rowsY) {
		this.x = x || 0;
		this.y = y || 0;
		this.rowsX = rowsX || 1;
		this.rowsY = rowsY || 1;
		this.active = true;
	}
	getWidth() {
		return this.rowsX * CHUNKSIZE;
	}
	getHeight() {
		return this.rowsY * CHUNKSIZE;
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
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.chunkArr = [];
	}
	moveDown() {
		this.y = this.y + SPEED;
	}

	isActive() {
    return this.getHeight() + this.y < CANVAS_HEIGHT;
    //  change to method 
    // colided with floor 
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
}

class PieceShapeI extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 1;
    this.rowsY = 4;
    this.chunkArr = [];
	}	
	draw() {
		const color = "blue";
		this.chunkArr = [];
		let i;
		for (i = 0; i < 4; i++) {
			this.chunkArr.push(new Chunk(this.x, this.y + i * CHUNKSIZE));
		}
		this.chunkArr.forEach(function(chunk) {
			chunk.draw(color);			
		});
	}
}

class PieceShapeL extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 2;
		this.rowsY = 3;
	}
	draw() {
		let chunkArr = [];
		let i;
		const color = "green";
		for (i = 0; i < 4; i++) {
			if (i != 3) {
				chunkArr.push(new Chunk(this.x, this.y + i * CHUNKSIZE));
			} else {
				chunkArr.push(
					new Chunk(this.x + CHUNKSIZE, this.y + (i - 1) * CHUNKSIZE)
				);
			}
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw(color);
		});
	}
}

class PieceShapeJ extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 2;
		this.rowsY = 3;
	}
	draw() {
		let chunkArr = [];
		let i;
		const color = "chartreuse";
		for (i = 0; i < 4; i++) {
			if (i != 3) {
				chunkArr.push(new Chunk(this.x + CHUNKSIZE, this.y + i * CHUNKSIZE));
			} else {
				chunkArr.push(new Chunk(this.x, this.y + (i - 1) * CHUNKSIZE));
			}
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw(color);
		});
	}
}

class PieceShapeZ extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 3;
		this.rowsY = 2;
	}

	draw() {
		let chunkArr = [];
		let i;
		for (i = 0; i < 2; i++) {
			chunkArr.push(new Chunk(this.x + i * CHUNKSIZE, this.y));
			chunkArr.push(
				new Chunk(this.x + (i + 1) * CHUNKSIZE, this.y + CHUNKSIZE)
			);
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw();
		});
	}
}

class PieceShapeS extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 3;
		this.rowsY = 2;
	}

	draw() {
		let chunkArr = [];
		let i;
		const color = "violet";
		for (i = 0; i < 2; i++) {
			chunkArr.push(new Chunk(this.x + (i + 1) * CHUNKSIZE, this.y));
			chunkArr.push(new Chunk(this.x + i * CHUNKSIZE, this.y + CHUNKSIZE));
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw(color);
		});
	}
}

class PieceShapeT extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 3;
		this.rowsY = 2;
	}

	draw() {
		let chunkArr = [];
		let i;
		const color = "brown";
		for (i = 0; i < 4; i++) {
			if (i != 3) {
				chunkArr.push(new Chunk(this.x + i * CHUNKSIZE, this.y + CHUNKSIZE));
			} else {
				chunkArr.push(new Chunk(this.x + CHUNKSIZE, this.y));
			}
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw(color);
		});
	}
}

class PieceShapeO extends Piece {
	constructor(x, y, rowsX, rowsY) {
		super(x, y, rowsX, rowsY);
		this.rowsX = 2;
		this.rowsY = 2;
	}

	draw() {
		let chunkArr = [];
		let i;
		const color = "yellow";
		for (i = 0; i < 2; i++) {
			chunkArr.push(new Chunk(this.x + i * CHUNKSIZE, this.y));
			chunkArr.push(new Chunk(this.x + i * CHUNKSIZE, this.y + CHUNKSIZE));
		}
		chunkArr.forEach(function(chunk) {
			chunk.draw(color);
		});
	}
}
