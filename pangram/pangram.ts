export function isPangram(text: string): boolean {
  text = text.toLowerCase();

  const foundLetters: Record<string, boolean> = {};
  for (let char of text) {
    if (isLetter(char)) {
      foundLetters[char] = true;
    }
  }

  const foundCount = Object.keys(foundLetters).length;
  return foundCount === 26;
}

function isLetter(char: string): boolean {
  return char >= 'a' && char <= 'z';
}
