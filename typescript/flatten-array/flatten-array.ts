type NestedArray = (number|undefined|NestedArray)[];

export function flatten(array: NestedArray): number[] {
  return array
    .flatMap(x => Array.isArray(x) ? flatten(x) : x)
    .filter((x): x is number => typeof x === 'number');
}
