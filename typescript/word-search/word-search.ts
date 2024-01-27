type FoundWord = {
  start: [number, number],
  end: [number, number],
};

type FoundWords = Record<string, FoundWord|undefined>;

export class WordSearch {
  protected rows: string[];
  protected cols: string[];

  constructor(grid: string[]) {
    this.rows = grid;

    // Transpose rows into cols.
    this.cols = Array.from({ length: this.rows[0].length }, () => '');
    for (const row of this.rows) {
      for (let x = 0; x < row.length; x += 1) {
        this.cols[x] += row.charAt(x);
      }
    }
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

    // check each row.
    for (let y = 1; y <= this.rows.length; y += 1) {
      const row = this.rows[y - 1];

      // check from left to right.
      {
        const index = row.indexOf(word);
        if (index !== -1) {
          const x1 = index + 1;
          const x2 = index + word.length;

          return {
            start: [y, x1],
            end: [y, x2],
          };
        }
      }

      // check from right to left.
      {
        const index = row.indexOf(backwardsWord);
        if (index !== -1) {
          const x1 = index + word.length;
          const x2 = index + 1;

          return {
            start: [y, x1],
            end: [y, x2],
          };
        }
      }
    }

    // check each col.
    for (let x = 1; x <= this.rows.length; x += 1) {
      const col = this.cols[x - 1];

      // check from top to bottom.
      {
        const index = col.indexOf(word);
        if (index !== -1) {
          const y1 = index + 1;
          const y2 = index + word.length;

          return {
            start: [y1, x],
            end: [y2, x],
          };
        }
      }

      // check from bottom to top.
      {
        const index = col.indexOf(backwardsWord);
        if (index !== -1) {
          const y1 = index + word.length;
          const y2 = index + 1;

          return {
            start: [y1, x],
            end: [y2, x],
          };
        }
      }
    }

    // word not found.
    return undefined;
  }
}
