export function encode(plainText: string): string {
  const plainChars = plainText.toLowerCase().split('');

  // Convert plain chars to cipher chars.
  const cipherChars = plainChars.reduce((arr, plainChar) => {
    const cipherChar = encodeChar(plainChar);
    if (cipherChar) arr.push(cipherChar);
    return arr;
  }, [] as string[]);

  // Convert char array to string with spaces every 5 chars.
  return cipherChars.reduce((str, char, index) => {
    if (index > 0 && index % 5 === 0) str += ' ';
    return str += char;
  }, '');
}

export function decode(cipherText: string): string {
  const cipherChars = cipherText.split('');

  // Convert cipher chars to plain chars.
  const plainChars = cipherChars.reduce((arr, cipherChar) => {
    const decoded = decodeChar(cipherChar);
    if (decoded) arr.push(decoded);
    return arr;
  }, [] as string[]);

  return plainChars.join('');
}

const plain  = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'zyxwvutsrqponmlkjihgfedcba';

const encodeMap = new Map<string, string>();
const decodeMap = new Map<string, string>();

for (let index = 0; index < plain.length; index++) {
  encodeMap.set(plain[index], cipher[index]);
  decodeMap.set(cipher[index], plain[index]);
}

function encodeChar(char: string): string|null {
  return isNumberChar(char)
    ? char
    : encodeMap.get(char) ?? null;
}

function decodeChar(char: string): string|null {
  return isNumberChar(char)
    ? char
    : decodeMap.get(char) ?? null;
}

function isNumberChar(char: string): boolean {
  return char >= '0'
      && char <= '9';
}
