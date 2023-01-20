export function compute(left: string, right: string): number {
  if (left.length !== right.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let distance = 0;
  for (let i = 0; i < left.length; i += 1) {
    if (left[i] !== right[i]) distance += 1;
  }

  return distance;
}
