const aCharCode = 'a'.charCodeAt(0);
const zCharCode = 'z'.charCodeAt(0);

export class SimpleCipher {
  public key: string;

  public constructor(key?: string) {
    this.key = key ?? this.randomKey();
  }

  public encode(plainText: string): string {
    const plainChars = plainText.split('');

    const cipherChars = plainChars.map((char, index) => {
      const offset = this.getOffset(index);
      return this.offsetChar(char, offset);
    });

    return cipherChars.join('');
  }

  public decode(cipherText: string): string {
    const cipherChars = cipherText.split('');

    const plainChars = cipherChars.map((char, index) => {
      const offset = this.getOffset(index);
      return this.offsetChar(char, -offset);
    });

    return plainChars.join('');
  }

  protected getOffset(index: number): number {
    const keyChar = this.key[index % this.key.length];
    const offset = keyChar.charCodeAt(0) - aCharCode;
    return offset;
  }

  protected offsetChar(char: string, offset: number): string {
    let code = char.charCodeAt(0) + offset;

    // Wrap-around char in range a-z
    if (code < aCharCode) code += 26;
    if (code > zCharCode) code -= 26;

    return String.fromCharCode(code);
  }

  protected randomKey(): string {
    return new Array(100).fill(undefined).map(_ => this.randomChar()).join('');
  }

  protected randomChar(): string {
    const min = aCharCode;
    const max = zCharCode;
    const code = min + Math.floor(Math.random() * (max - min + 1));
    return String.fromCharCode(code);
  }
}
