enum Nucleotide {
  A = 'A',
  C = 'C',
  G = 'G',
  T = 'T',
};

function isNucleotide(n: string): n is Nucleotide {
  return Object.values(Nucleotide).includes(n as Nucleotide);
}

export function nucleotideCounts(dna: string): Record<Nucleotide, number> {
  const counts: Record<Nucleotide, number> = { A: 0, C: 0, G: 0, T: 0 };

  for (const n of dna) {
    if (!isNucleotide(n)) throw new Error('Invalid nucleotide in strand');

    counts[n] += 1;
  }

  return counts;
}
