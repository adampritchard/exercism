type FoundWord = {
  start: [number, number],
  end: [number, number],
};

type FoundWords = Record<string, FoundWord|undefined>;

const directions = [
  [ 1,  0], // ➡️
  [-1,  0], // ⬅️
  [ 0,  1], // ⬇️
  [ 0, -1], // ⬆️
  [ 1,  1], // ↘️
  [-1, -1], // ↖️
  [ 1, -1], // ↗️
  [-1,  1], // ↙️
];

export class WordSearch {
  protected grid: string[][];

  constructor(grid: string[]) {
    this.grid = grid.map(row => Array.from(row));
  }

  public find(words: string[]): FoundWords {
    const foundWords: FoundWords = {};

    for (const word of words) {
      foundWords[word] = this.findWord(word);
    }

    return foundWords;
  }

  protected findWord(word: string): FoundWord|undefined {
    for (let y = 0; y < this.grid.length; y += 1) {
      for (let x = 0; x < this.grid[0].length; x += 1) {
        for (const [dx, dy] of directions) {
          const found = this.findWordAtCoord(word, x, y, dx, dy);
          if (found) return found;
        }
      }
    }

    // word not found.
    return undefined;
  }

  protected findWordAtCoord(word: string, x: number, y: number, dx: number, dy: number): FoundWord|undefined {
    const x2 = x + (dx * (word.length - 1));
    const y2 = y + (dy * (word.length - 1));

    if (!this.isInBounds(x2, y2)) {
      return undefined;
    }

    // check for any chars that don't match.
    for (let i = 0; i < word.length; i += 1) {
      const ix = x + (i * dx);
      const iy = y + (i * dy);

      if (this.grid[iy][ix] !== word.charAt(i)) {
        return undefined;
      }
    }

    return {
      start: [y  + 1, x  + 1],
      end:   [y2 + 1, x2 + 1],
    };
  }

  protected isInBounds(x: number, y: number): boolean {
    return x < this.grid[0].length
        && x >= 0
        && y < this.grid.length
        && y >= 0;
  }
}
