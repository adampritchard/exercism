const plain  = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'zyxwvutsrqponmlkjihgfedcba';

const encodeMap = new Map<string, string>();
const decodeMap = new Map<string, string>();
for (let index = 0; index < plain.length; index++) {
  encodeMap.set(plain[index], cipher[index]);
  decodeMap.set(cipher[index], plain[index]);
}

export function encode(plainText: string): string {
  const plainChars = cleanChars(plainText);
  const cipherChars = plainChars.map(char => encodeMap.get(char) ?? char);

  // Reduce char array to string with spaces every 5 chars.
  return cipherChars.reduce((str, char, index) => {
    if (index > 0 && index % 5 === 0) str += ' ';
    return str += char;
  }, '');
}

export function decode(cipherText: string): string {
  const cipherChars = cleanChars(cipherText);
  const plainChars = cipherChars.map(char => decodeMap.get(char) ?? char);
  return plainChars.join('');
}

function cleanChars(text: string): string[] {
  return text.toLowerCase().replace(/[^\w]/g, '').split('');
}
