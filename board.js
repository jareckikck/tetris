class Board {
  constructor(blockSize, size) {
    this.blockSize = blockSize;
    this.columns = size[0];
    this.rows = size[1];
    this.body = this.emptyBoard();
    this.activePieceExist = false;
  }
	newLine = () => Array.from(Array(this.columns), e => 0);
	emptyBoard = () => Array.from(Array(this.rows), e => this.newLine())
  map(piece) {		
    for (let countY = 0; countY < piece.shape.length; countY++) {
      for (let countX = 0; countX < piece.getWidth(); countX++) {
				//there was case when piece.y + countY was undefined? need to investigate
				// console.log(piece.y + countY);
				if(piece.shape[countY][countX] == 1 ){										
					board.body[piece.y + countY][piece.x + countX] =
          piece.shape[countY][countX];
				}
      }
    }
	}
	
  draw() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.body[i][j] == 1) {
          let chunk = new Chunk(j, i);
          chunk.draw();
        }
      }
    }
	}
	
  updateLines() {
		this.body = this.body.filter(e => !e.every(v => v == 1));
		let lines = 0
    while (this.body.length < this.rows) {
			this.body.unshift(this.newLine());
			lines++;
		}
		let addScore = lines*100;
		updateScore(addScore);
  }
}
