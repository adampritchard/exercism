export function sum(numbers: number[], max: number): number {
  const multiples: number[] = [];

  for (let i = 1; i < max; i += 1) {
    for (const n of numbers) {
      if (i % n === 0) {
        multiples.push(i);
        break;
      }
    }
  }

  // Return the sum of the multiples.
  return multiples.reduce((acc, val) => acc + val, 0);
}
