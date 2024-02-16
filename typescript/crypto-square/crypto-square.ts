export class Crypto {
  constructor(
    public plainText: string,
  ) {}

  get ciphertext(): string {
    const cleanText = this.plainText
      .toLowerCase()
      .replaceAll(/[^\w0-9]/g, '');

    const colCount = this.getColCount(cleanText.length);
    const rowCount = Math.ceil(cleanText.length / colCount);
    const square: string[][] = Array.from({ length: rowCount }, () => []);

    let i = 0;
    for (let col = 0; col < colCount; col += 1) {
      for (let row = 0; row < rowCount; row += 1) {
        square[row][col] = cleanText[i] || ' ';
        i += 1;
      }
    }

    return square
      .map(arr => arr.join(''))
      .join(' ');
  }

  public getColCount(length: number) {
    const targetRowCount = Math.ceil(Math.sqrt(length));

    let colCount = 1;

    for (let i = 2; i < length; i += 1) {
      const rowCount = Math.ceil(length / i);

      if (rowCount === targetRowCount) {
        colCount = i;
        break;
      } else if (rowCount > targetRowCount) {
        colCount = i;
      } else {
        break;
      }
    }

    return colCount;
  }
}
