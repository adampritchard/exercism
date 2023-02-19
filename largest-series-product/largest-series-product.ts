export const largestProduct = (digitString: string, span: number): number => {
  if (span > digitString.length) {
    throw new Error('Span must be smaller than string length');
  } else if (span < 0) {
    throw new Error('Span must not be negative');
  } else if (digitString.match(/[^\d]/)) {
    throw new Error('Digits input must only contain digits');
  }

  const digits: number[] = digitString.split('').map(Number);

  let largest = 0;
  for (let i = 0; i <= digits.length - span; i += 1) {
    largest = Math.max(largest, product(digits, i, i + span));
  }

  return largest;
}

function product(values: number[], rangeStart: number, rangeEnd: number): number {
  let product = 1;
  for (let i = rangeStart; i < Math.min(rangeEnd, values.length); i += 1) {
    product *= values[i];
  }

  return product;
}
