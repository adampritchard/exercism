export const square = (num: number): bigint => {
  if (num < 1 || num > 64) throw new Error('Invalid square');

  return num === 1
    ? 1n
    : 2n * square(num - 1);
}

export const total = (): bigint => {
  let sum = 0n;
  for (let i = 1; i <= 64; i++) {
    sum += square(i);
  }

  return sum;
}
