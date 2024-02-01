type NestedArray = (number|undefined|NestedArray)[];

export function flatten(array: NestedArray): number[] {
  return array
    .flat(20)
    .filter(isNumber);
}

function isNumber(n: any): n is number {
  return typeof n === 'number';
}
