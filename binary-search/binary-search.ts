export function find(haystack: number[], needle: number): number | never {
  let min = 0;
  let max = haystack.length - 1;

  while (min <= max) {
    const index = min + Math.floor((max - min) / 2);
    if (haystack[index] === needle) return index;
    if (haystack[index] > needle) max = index - 1;
    if (haystack[index] < needle) min = index + 1;
  }

  throw new Error('Value not in array');
}
