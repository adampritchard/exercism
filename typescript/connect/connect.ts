type Coord = { x: number, y: number };
type Player = 'X' | 'O' | '';

const directions: Coord[] = [
  { x: -1, y: -1 }, // top left
  { x:  1, y: -1 }, // top right
  { x: -2, y:  0 }, // left
  { x:  2, y:  0 }, // right
  { x: -1, y:  1 }, // btm left
  { x:  1, y:  1 }, // btm right
];

export class Board {
  protected visited: Coord[];

  constructor(public board: string[]) {
    this.visited = [];
  }

  public winner(): Player {
    this.visited = [];

    // O must connect top to bottom.
    for (let x = 0; x < this.board[0].length; x += 1) {
      const y = 0;
      if (this.board[y].charAt(x) === 'O') {
        if (this.searchForWin({ x, y }, 'O')) {
          return 'O';
        }
      }
    }

    // X must connect left to right.
    for (let y = 0; y < this.board.length; y += 1) {
      const x = y;
      if (this.board[y].charAt(x) === 'X') {
        if (this.searchForWin({ x, y }, 'X')) {
          return 'X';
        }
      }
    }

    return '';
  }

  searchForWin(coord: Coord, player: Player): boolean {
    this.visit(coord);

    // X wins if they touch the right edge.
    if (player === 'X' && coord.x + 1 === this.board[coord.y].length) {
      return true;
    }

    // O wins if they touch the bottom edge.
    if (player === 'O' && coord.y + 1 === this.board.length) {
      return true;
    }

    for (const dir of directions) {
      const next: Coord = {
        x: coord.x + dir.x,
        y: coord.y + dir.y,
      };

      if (this.canVisit(next, player)) {
        if (this.searchForWin(next, player)) {
          return true;
        }
      }
    }

    return false;
  }

  visit(coord: Coord) {
    this.visited.push(coord);
  }

  hasVisited(coord: Coord): boolean {
    for (const other of this.visited) {
      if (other.x === coord.x && other.y === coord.y) {
        return true;
      }
    }

    return false;
  }

  canVisit(coord: Coord, player: Player): boolean {
    if (!this.board[coord.y] || this.board[coord.y][coord.x] !== player) {
      return false;
    }

    return !this.hasVisited(coord);
  }
}
