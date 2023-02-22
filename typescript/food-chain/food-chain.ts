const animals: Record<number, string> = {
  1: 'fly',
  2: 'spider',
  3: 'bird',
  4: 'cat',
  5: 'dog',
  6: 'goat',
  7: 'cow',
  8: 'horse',
};

export function verse(n: number): string {
  let text = `I know an old lady who swallowed a ${animals[n]}.\n`;

  if (n === 8) {
    return text + "She's dead, of course!\n";
  } else {
    if (n === 2) text += "It wriggled and jiggled and tickled inside her.\n";
    if (n === 3) text += "How absurd to swallow a bird!\n";
    if (n === 4) text += "Imagine that, to swallow a cat!\n";
    if (n === 5) text += "What a hog, to swallow a dog!\n";
    if (n === 6) text += "Just opened her throat and swallowed a goat!\n";
    if (n === 7) text += "I don't know how she swallowed a cow!\n";

    if (n > 6) text += "She swallowed the cow to catch the goat.\n";
    if (n > 5) text += "She swallowed the goat to catch the dog.\n";
    if (n > 4) text += "She swallowed the dog to catch the cat.\n";
    if (n > 3) text += "She swallowed the cat to catch the bird.\n";
    if (n > 2) text += "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
    if (n > 1) text += "She swallowed the spider to catch the fly.\n";

    text += "I don't know why she swallowed the fly. Perhaps she'll die.\n";

    return text;
  }
}

export function verses(start: number, end: number): string {
  const vs = [];
  for (let n = start; n <= end; n += 1) {
    vs.push(verse(n));
  }

  return vs.join("\n");
}
