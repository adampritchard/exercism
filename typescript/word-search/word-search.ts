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
    const backwardsWord = Array.from(word).reverse().join('');

    for (let y = 0; y < this.grid.length; y += 1) {
      for (let x = 0; x < this.grid[0].length; x += 1) {

        if (this.findWordLeftToRight(x, y, word)) {
          return {
            start: [y + 1, x + 1],
            end:   [y + 1, x + word.length],
          };
        }

        if (this.findWordLeftToRight(x, y, backwardsWord)) {
          return {
            start: [y + 1, x + word.length],
            end:   [y + 1, x + 1],
          };
        }

        if (this.findWordTopToBottom(x, y, word)) {
          return {
            start: [y + 1, x + 1],
            end: [y + word.length, x + 1],
          };
        }

        if (this.findWordTopToBottom(x, y, backwardsWord)) {
          return {
            start: [y + word.length, x + 1],
            end: [y + 1, x + 1],
          };
        }

        if (this.findWordTopLeftToBottomRight(x, y, word)) {
          return {
            start: [y + 1, x + 1],
            end: [y + word.length, x + word.length],
          };
        }

        if (this.findWordTopLeftToBottomRight(x, y, backwardsWord)) {
          return {
            start: [y + word.length, x + word.length],
            end: [y + 1, x + 1],
          };
        }

        if (this.findWordBottomLeftToTopRight(x, y, word)) {
          return {
            start: [y + 1, x + 1],
            end: [y + 1 - (word.length - 1), x + word.length],
          };
        }

        if (this.findWordBottomLeftToTopRight(x, y, backwardsWord)) {
          return {
            start: [y + 1 - (word.length - 1), x + word.length],
            end: [y + 1, x + 1],
          };
        }
      }
    }

    // word not found.
    return undefined;
  }

  protected findWordLeftToRight(x: number, y: number, word: string): boolean {
    const x2 = x + word.length - 1;
    const y2 = y;
    return this.findWordAtCoords(x, y, x2, y2, word);
  }

  protected findWordTopToBottom(x: number, y: number, word: string): boolean {
    const x2 = x;
    const y2 = y + word.length - 1;
    return this.findWordAtCoords(x, y, x2, y2, word);
  }

  protected findWordTopLeftToBottomRight(x: number, y: number, word: string): boolean {
    const x2 = x + word.length - 1;
    const y2 = y + word.length - 1;
    return this.findWordAtCoords(x, y, x2, y2, word);
  }

  protected findWordBottomLeftToTopRight(x: number, y: number, word: string): boolean {
    const x2 = x + word.length - 1;
    const y2 = y - word.length - 1;
    return this.findWordAtCoords(x, y, x2, y2, word);
  }

  protected findWordAtCoords(x1: number, y1: number, x2: number, y2: number, word: string): boolean {
    if (!this.isInBounds(x1, y1) || !this.isInBounds(x2, y2)) {
      return false;
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
        return false;
      }
    }

    return true;
  }

  protected isInBounds(x: number, y: number): boolean {
    return x < this.grid[0].length
        && x >= 0
        && y < this.grid.length
        && y >= 0;
  }
}
