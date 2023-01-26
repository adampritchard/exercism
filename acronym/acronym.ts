export function parse(phrase: string): string {
  return Array.from(phrase)
    .filter((char, idx) =>
      // First letter.
      idx === 0
      // Prev letter is a space or dash.
      || phrase[idx - 1].match(/[\s\-]/)
      // Letter is a capital, and the prev letter is not.
      || phrase[idx].match(/[A-Z]/) && phrase[idx - 1].match(/[a-z]/)
    )
    .join('')
    .toUpperCase();
}
