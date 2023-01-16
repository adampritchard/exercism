export function steps(count: number): number {
  if (count <= 0) {
    throw new Error('Only positive numbers are allowed');
  } else if (count === 1) {
    return 0;
  } else if (count % 2 === 0) {
    return 1 + steps(count / 2);
  } else {
    return 1 + steps(count * 3 + 1);
  }
}
