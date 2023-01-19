
export function translate(rna: string): string[] {
  const proteins: string[] = [];

  const codons = rna.match(/\w\w\w/g) ?? [];
  for (const codon of codons) {
    const protein = getProtein(codon);
    if (protein) {
      proteins.push(protein);
    } else {
      break;
    }
  }

  return proteins;
}

function getProtein(codon: string): string|null {
  if (['AUG'].includes(codon)) return 'Methionine';

  if (['UUU', 'UUC'].includes(codon)) return 'Phenylalanine';

  if (['UUA', 'UUG'].includes(codon)) return 'Leucine';

  if (['UCU', 'UCC', 'UCA', 'UCG'].includes(codon)) return 'Serine';

  if (['UAU', 'UAC'].includes(codon)) return 'Tyrosine';

  if (['UGU', 'UGC'].includes(codon)) return 'Cysteine';

  if (['UGG'].includes(codon)) return 'Tryptophan';

  // 'Stop' codons.
  if (['UAA', 'UAG', 'UGA'].includes(codon)) return null;

  return null;
}
