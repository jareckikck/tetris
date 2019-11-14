class Piece extends Chunk {
  constructor(x, y, shape) {
    super(x, y, shape);
    this.shape = shape || [
      [1, 1],
      [1, 1]
    ];
    this.chunks;
  }
  getWidth() {
    let width = 0;
    let current = 0;
    this.shape.forEach(el => {
      el.forEach(v => {
        if (v == 0) return;
        current++;
      });
      if (current < width) return;
      width = current;
      current = 0;
    });
    return width;
  }

  canMoveDown() {
    let canMove = true;
    if (this.y == board.rows - this.shape.length) {
      return false;
    }

    let bottomY = this.y + this.shape.length;
    for (let i = 0; i < this.shape.length; i++) {
      let bottomX = this.x + i;
      if (board.body[bottomY][bottomX] == 1) {
        canMove = false;
      }
    }
    return canMove;
	}
	rotate(){
		let newShape = []
		for(let x = 0; x < this.getWidth(); x++){
			let row = []
			for(let y = 0; y < this.shape.length; y++){	
				row.unshift(this.shape[y][x]);				
			}
			newShape.push(row);
		}
		this.shape = newShape;
	}
  canMoveRight() {
    let canMove = true;
    if (this.x == board.columns - this.getWidth()) {
      return false;
    }
    let rightEdgeX = this.x + this.getWidth();
    for (let i = 0; i < this.shape.length; i++) {
      let rightEdgeY = this.y + i;
      if (board.body[rightEdgeY][rightEdgeX] == 1) {
        canMove = false;
      }
    }
    return canMove;
  }
  canMoveLeft() {
    let canMove = true;
    if (this.x == 0) {
      return false;
    }
    for (let i = 0; i < this.shape.length; i++) {
      let leftEdgeY = this.y + i;
      if (board.body[leftEdgeY][this.x - 1] == 1) {
        canMove = false;
      }
    }
    return canMove;
  }
  moveDown() {
    this.y = this.y + 1;
  }
  moveRight() {
    if (!this.canMoveRight()) {
      return;
    }
    this.x = this.x + 1;
  }

  moveLeft() {
    if (!this.canMoveLeft()) {
      return;
    }
    this.x = this.x - 1;
    // this.x = this.x <= 0 ? 0 : this.x - 1;
  }

  draw() {
    this.chunks = [];

    this.shape.forEach((rowY, indexY) => {
      rowY.forEach((val, indexX) => {
        if (val == 0) {
          return;
        }
        this.chunks.push(new Chunk(this.x + indexX, this.y + indexY));
      });
    });

    this.chunks.forEach(chunk => {
      chunk.draw();
    });
  }
}
