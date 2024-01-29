export function verse(n: number): string {
  if (n === 0) {
    return `No more bottles of beer on the wall, no more bottles of beer.\n`
         + `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
  } else if (n === 1) {
    return `1 bottle of beer on the wall, 1 bottle of beer.\n`
         + `Take it down and pass it around, no more bottles of beer on the wall.\n`;
  } else {
    return `${n} bottles of beer on the wall, ${n} bottles of beer.\n`
         + `Take one down and pass it around, ${n-1} bottle${(n-1) === 1 ? '' : 's'} of beer on the wall.\n`;
  }
}

export function sing(firstVerse: number = 99, lastVerse: number = 0): string {
  let verses = '';
  for (let n = firstVerse; n >= lastVerse; n -= 1) {
    verses += verse(n);

    if (n !== lastVerse) {
      verses += '\n';
    }
  }
  return verses;
}
