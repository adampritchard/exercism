export class Anagram {
  constructor(
    public input: string,
  ) {}

  public matches(...potentials: string[]): string[] {
    const inputLetters = this.getLetterCounts(this.input);

    return potentials.filter(word => {
      if (this.input.length !== word.length) return false;
      if (this.input.toLowerCase() === word.toLowerCase()) return false;

      return Object
        .entries(this.getLetterCounts(word))
        .every(([letter, count]) => inputLetters[letter] === count);
    });
  }

  protected getLetterCounts(word: string): Record<string, number> {
    const counts: Record<string, number> = {};

    for (const char of word.toLowerCase()) {
      counts[char] = 1 + (counts[char] || 0);
    }

    return counts;
  }
}
