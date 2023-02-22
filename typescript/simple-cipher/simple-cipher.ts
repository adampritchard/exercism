const alphabet = 'abcdefghijklmnopqrstuvwxyz';

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
    return alphabet.indexOf(keyChar);
  }

  protected offsetChar(char: string, offset: number): string {
    const index = (alphabet.indexOf(char) + offset + alphabet.length) % alphabet.length;
    return alphabet[index];
  }

  protected randomKey(): string {
    return Array.from({ length: 100 }, this.randomChar).join('');
  }

  protected randomChar(): string {
    const index = Math.floor(Math.random() * alphabet.length);
    return alphabet[index];
  }
}
