export function nth(n: number): number {
  if (n === 0) {
    throw new Error('Prime is not possible');
  }

  let prime = 0;

  let i = 1;
  while (n) {
    if (isPrime(i)) {
      prime = i;
      n -= 1;
    }

    i += 1;
  }

  return prime;
}

function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= (n / 2); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}
