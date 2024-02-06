type Coord = { x: number, y: number };
type Piece = 'X' | 'O' | '';
type Edge = 'bottom' | 'right';

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

  public winner(): Piece {
    // O must connect top to bottom.
    for (let x = 0; x < this.board[0].length; x += 1) {
      const y = 0;
      if (this.board[y].charAt(x) === 'O') {
        if (this.searchForEdge({ x, y }, 'O', 'bottom')) {
          return 'O';
        }
      }
    }

    // X must connect left to right.
    for (let y = 0; y < this.board.length; y += 1) {
      const x = y;
      if (this.board[y].charAt(x) === 'X') {
        if (this.searchForEdge({ x, y }, 'X', 'right')) {
          return 'X';
        }
      }
    }

    return '';
  }

  searchForEdge(coord: Coord, piece: Piece, edge: Edge): boolean {
    this.visit(coord);

    if (this.isTouchingEdge(coord, edge)) {
      return true;
    } else {
      for (const dir of directions) {
        const next: Coord = {
          x: coord.x + dir.x,
          y: coord.y + dir.y,
        };

        if (this.canVisit(next, piece)) {
          if (this.searchForEdge(next, piece, edge)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  isTouchingEdge(coord: Coord, edge: Edge): boolean {
    if (edge === 'bottom') {
      return coord.y + 1 === this.board.length;
    }

    if (edge === 'right') {
      return coord.x + 1 === this.board[coord.y].length;
    }

    throw new Error('unreachable');
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

  canVisit(coord: Coord, piece: Piece): boolean {
    if (!this.board[coord.y] || this.board[coord.y][coord.x] !== piece) {
      return false;
    }

    return !this.hasVisited(coord);
  }
}
