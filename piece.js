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
      current = el.length;
      if (current < width) return;
      width = current;
      current = 0;
    });
    return width;
  }

  canMoveDown() {  
    let canMove = true;

    for (let i = 0; i < this.shape.length; i++) {
      let bottomY = this.y + i;

      for (let j = 0; j < this.getWidth(); j++) {
        let bottomX = this.x + j;

        if (board.body[bottomY + 1] == undefined) {
          return false;
        }
        if (board.body[bottomY + 1][bottomX] == 1 && this.shape[i][j] == 1) {
          canMove = false;
        }
      }
    }
    return canMove;
	}
	
  rotate() {
    let newShape = [];
    if (!this.canMoveRight() && this.getWidth() < this.shape.length) {
      this.x = this.x - 1;
    }

    for (let x = 0; x < this.getWidth(); x++) {
      let row = [];
      for (let y = 0; y < this.shape.length; y++) {
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
  }

  draw() {
    this.chunks = [];

    this.shape.forEach((rowY, indexY) => {
      rowY.forEach((val, indexX) => {
        if (val == 0 || val == undefined) {
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
