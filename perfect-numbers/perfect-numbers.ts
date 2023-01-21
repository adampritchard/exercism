export function classify(n: number): 'abundant'|'deficient'|'perfect' {
  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const aSum = aliquotSum(n);
  return aSum > n
    ? 'abundant'
    : aSum < n
      ? 'deficient'
      : 'perfect';
}

function aliquotSum(n: number): number {
  return factors(n).reduce((sum, val) => sum += val, 0);
}

function factors(n: number): number[] {
  const results = [];

  for (let i = n - 1; i > 0; i -= 1) {
    if (n % i === 0) results.push(i);
  }

  return results;
}
