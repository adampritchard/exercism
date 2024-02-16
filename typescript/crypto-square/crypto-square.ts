export class Crypto {
  constructor(
    public plainText: string,
  ) {}

  get ciphertext(): string {
    const cleanText = this.plainText
      .toLowerCase()
      .replaceAll(/[^\w0-9]/g, '');
    
    const rowCount = Math.ceil(Math.sqrt(cleanText.length));
    const colCount = Math.ceil(cleanText.length / rowCount);

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
}
