type FoundWord = {
  start: [number, number],
  end: [number, number],
};

type FoundWords = Record<string, FoundWord|undefined>;

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
        let found: FoundWord|undefined = undefined;

        const x2 = x + (word.length - 1);
        const y2 = y + (word.length - 1);
        const y3 = y - (word.length - 1);

        // left to right.
        found = this.findWordAtCoords(x, y, x2, y, word);
        if (found) return found;

        // right to left.
        found = this.findWordAtCoords(x2, y, x, y, word);
        if (found) return found;

        // top to bottom.
        found = this.findWordAtCoords(x, y, x, y2, word);
        if (found) return found;

        // bottom to top.
        found = this.findWordAtCoords(x, y2, x, y, word);
        if (found) return found;

        // top left to bottom right.
        found = this.findWordAtCoords(x, y, x2, y2, word);
        if (found) return found;

        // bottom right to top left.
        found = this.findWordAtCoords(x2, y2, x, y, word);
        if (found) return found;

        // bottom left to top right.
        found = this.findWordAtCoords(x, y, x2, y3, word);
        if (found) return found;

        // top right to bottom left.
        found = this.findWordAtCoords(x2, y3, x, y, word);
        if (found) return found;
      }
    }

    // word not found.
    return undefined;
  }

  protected findWordAtCoords(x1: number, y1: number, x2: number, y2: number, word: string): FoundWord|undefined {
    if (!this.isInBounds(x1, y1) || !this.isInBounds(x2, y2)) {
      return undefined;
    }

    const getIndex = (min: number, max: number, i: number) => {
      if (max === min) return min;
      if (max > min) return min + i;
      return min - i;
    };

    // check for any chars that don't match.
    for (let i = 0; i < word.length; i += 1) {
      const x = getIndex(x1, x2, i);
      const y = getIndex(y1, y2, i);

      if (this.grid[y][x] !== word.charAt(i)) {
        return undefined;
      }
    }

    return {
      start: [y1 + 1, x1 + 1],
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
