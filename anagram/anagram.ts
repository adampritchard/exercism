export class Anagram {
  constructor(
    public input: string,
  ) {}

  public matches(...potentials: string[]): string[] {
    const lowCaseInput = this.input.toLowerCase();
    const sortedInput = [...lowCaseInput].sort().join('');

    return potentials.filter(word => {
      const lowCaseWord = word.toLowerCase();
      return lowCaseInput !== lowCaseWord
        && sortedInput === [...lowCaseWord].sort().join('');
    });
  }
}
