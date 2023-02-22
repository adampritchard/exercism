export function transform(legacyScoring: Record<number, string[]>): Record<string, number> {
  const newScoring: Record<string, number> = {};

  for (const [points, letters] of Object.entries(legacyScoring)) {
    for (const letter of letters) {
      newScoring[letter.toLowerCase()] = Number(points);
    }
  }

  return newScoring;
}
