export function rotate(text: string, offset: number): string {
  return mapString(text, char => offsetChar(char, offset));
}

function offsetChar(char: string, offset: number): string {
  if (!char.match(/[A-Za-z]/)) {
    return char;
  }

  const charCode = char.charCodeAt(0);

  const aChar = char.match(/[A-Z]/) ? 'A' : 'a';
  const aCharCode = aChar.charCodeAt(0);

  const offsetCharCode = ((charCode + offset - aCharCode) % 26) + aCharCode;
  return String.fromCharCode(offsetCharCode);
}

function mapString(text: string, fn: (s: string) => string): string {
  return Array
    .from(text)
    .map(fn)
    .join('');
}
