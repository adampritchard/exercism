export function isIsogram(text: string): boolean {
  // Remove whitespace and hyphens.
  text = text.replace(/[\s-]/g, '').toLowerCase();

  const found: Record<string, boolean> = {};
  for (const char of text) {
    if (found[char]) {
      // Found a repeated letter.
      return false;
    }

    found[char] = true;
  }

  // Found no repeated letters.
  return true;
}
