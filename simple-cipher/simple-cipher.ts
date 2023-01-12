const aCharCode = 'a'.charCodeAt(0);
const zCharCode = 'z'.charCodeAt(0);

export class SimpleCipher {
  public key: string;

  public constructor(key?: string) {
    this.key = key ?? this.randomKey();
  }

  public encode(plainText: string): string {
    return this.shift(plainText, 'right');
  }

  public decode(cipherText: string): string {
    return this.shift(cipherText, 'left');
  }

  protected shift(text: string, dir: 'left'|'right'): string {
    const offsetDir = dir === 'left' ? -1 : 1;

    const shifted = text.split('').map((char, index) => {
      const offset = this.getOffset(index);
      return this.offsetChar(char, offsetDir * offset);
    });

    return shifted.join('');
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
    return Array.from({ length: 100 }, this.randomChar).join('');
  }

  protected randomChar(): string {
    const min = aCharCode;
    const max = zCharCode;
    const code = min + Math.floor(Math.random() * (max - min + 1));
    return String.fromCharCode(code);
  }
}
