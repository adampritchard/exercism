const proteinMap: Record<string, string[]> = {
  Methionine:    ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine:       ['UUA', 'UUG'],
  Serine:        ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine:      ['UAU', 'UAC'],
  Cysteine:      ['UGU', 'UGC'],
  Tryptophan:    ['UGG'],
  STOP:          ['UAA', 'UAG', 'UGA'],
};

export function translate(rna: string): string[] {
  const proteins: string[] = [];

  const codons = rna.match(/\w\w\w/g) ?? [];
  for (const codon of codons) {
    const protein = getProtein(codon);
    if (protein !== 'STOP') {
      proteins.push(protein);
    } else {
      break;
    }
  }

  return proteins;
}

function getProtein(codon: string): string {
  for (const [protein, codons] of Object.entries(proteinMap)) {
    if (codons.includes(codon)) return protein;
  }

  throw new Error(`Unknown codon: '${codon}'`);
}
