export function count(text: string): Map<string, number> {
  const counts = new Map<string, number>();

  const words = text.toLowerCase().trim().split(/\s+/);
  for (const word of words) {
    counts.set(word, 1 + (counts.get(word) ?? 0));
  }

  return counts;
}
