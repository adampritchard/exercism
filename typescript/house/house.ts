const subjects: Record<number, { name: string, verb?: string }> = {
   1: { name: 'house that Jack built.' },
   2: { name: 'malt', verb: 'lay in' },
   3: { name: 'rat', verb: 'ate' },
   4: { name: 'cat', verb: 'killed' },
   5: { name: 'dog', verb: 'worried' },
   6: { name: 'cow with the crumpled horn', verb: 'tossed' },
   7: { name: 'maiden all forlorn', verb: 'milked' },
   8: { name: 'man all tattered and torn', verb: 'kissed' },
   9: { name: 'priest all shaven and shorn', verb: 'married' },
  10: { name: 'rooster that crowed in the morn', verb: 'woke' },
  11: { name: 'farmer sowing his corn', verb: 'kept' },
  12: { name: 'horse and the hound and the horn', verb: 'belonged to' },
};

export function verse(n: number): string[] {
  const lines = [`This is the ${subjects[n]?.name}`];

  for (let i = n; i > 1; i -= 1) {
    lines.push(`that ${subjects[i].verb} the ${subjects[i - 1].name}`);
  }

  return lines;
}

export function verses(start: number, end: number): string[] {
  const lines: string[] = [];

  for (let i = start; i <= end; i += 1) {
    lines.push(...verse(i));
    if (i !== end) lines.push('');
  }

  return lines;
}
