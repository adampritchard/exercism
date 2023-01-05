const dnaToRnaMap: Record<string, string> = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
};

export function toRna(dna: string): string {
  let rna = '';

  for (const dnaChar of dna) {
    const rnaChar = dnaToRnaMap[dnaChar];
    if (!rnaChar) throw new Error('Invalid input DNA.');
    rna += rnaChar;
  }

  return rna;
}
