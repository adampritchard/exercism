const pointsMap = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', "G"],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
  10: ['Q', 'Z'],
};

function getPoints(char: string): number {
  for (const [points, chars] of Object.entries(pointsMap)) {
    if (chars.includes(char)) return Number(points);
  }

  throw new Error(`Invalid char: '${char}'`);
}

export function score(word: string = ''): number {
  return word
    .toUpperCase()
    .split('')
    .reduce((sum, char) => sum += getPoints(char), 0);
}
