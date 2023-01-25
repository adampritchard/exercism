type Options = {
  minFactor?: number,
  maxFactor?: number,
  sum: number,
};

export function triplets({ sum, minFactor, maxFactor }: Options): Triplet[] {
  const results = [];

  const max = maxFactor || sum / 2;
  const min = minFactor || 1;

  for (let a = min; a < max; a += 1) {
    for (let b = a + 1; b < max; b += 1) {
      const c = sum - a - b;
      
      if (c < max && a**2 + b**2 === c**2) {
        results.push(new Triplet(a, b, c));
      }
    }
  }

  return results;
}

class Triplet {
  constructor(
    public a: number,
    public b: number,
    public c: number,
  ) {}

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}
