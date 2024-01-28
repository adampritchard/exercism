export function rotate(text: string, offset: number): string {
  return text.replace(/[A-Za-z]/g, (char) => offsetChar(char, offset));
}

function offsetChar(char: string, offset: number): string {
  const charCode = char.charCodeAt(0) + offset;
  const aCode = char.match(/[A-Z]/) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  return String.fromCharCode(((charCode - aCode) % 26) + aCode);
}
