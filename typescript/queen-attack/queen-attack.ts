type Position = readonly [number, number];

type Positions = {
  black: Position,
  white: Position,
}

export class QueenAttack {
  public readonly black: Position;
  public readonly white: Position;

  constructor(positions?: Partial<Positions>) {
    this.black = positions?.black || [0, 3];
    this.white = positions?.white || [7, 3];
    this.validate();
  }

  validate() {
    this.validateOnBoard(this.black);
    this.validateOnBoard(this.white);

    if (this.black[0] === this.white[0] && this.black[1] === this.white[1]) {
      throw new Error('Queens cannot share the same space');
    }
  }

  validateOnBoard(pos: Position) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] > 7 || pos[1] > 7) {
      throw new Error('Queen must be placed on the board');
    }
  }

  toString(): string {
    const board: string[][] = Array.from(new Array(8), () => new Array(8).fill('_'));
    board[this.black[0]][this.black[1]] = 'B';
    board[this.white[0]][this.white[1]] = 'W';
    return board.map(row => row.join(' ')).join('\n');
  }

  get canAttack() {
    const delta: Position = [
      this.black[0] - this.white[0],
      this.black[1] - this.white[1],
    ];

    return delta[0] === 0 // same row
        || delta[1] === 0 // same col
        || Math.abs(delta[0]) === Math.abs(delta[1]); // same diagonal
  }
}
