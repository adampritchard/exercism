export function isPangram(text: string): boolean {
  const lettersOnly = text.toLowerCase().replace(/[^a-z]/g, '');
  const set = new Set(lettersOnly);
  return set.size === 26;
}
