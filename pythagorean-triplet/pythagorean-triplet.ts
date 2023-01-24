type Options = {
  minFactor?: number,
  maxFactor?: number,
  sum: number,
};

export function triplets({ sum, minFactor, maxFactor }: Options): Triplet[] {
  const results = [];

  for (let c = sum - 1; c >= 0; c -= 1) {
    for (let b = c - 1; b >= 0; b -= 1) {
      for (let a = b - 1; a >= 0; a -= 1) {
        const isPythagoreanTriplet = a**2 + b**2 === c**2;
        if (isPythagoreanTriplet) {
          const satisfiesSum = a + b + c === sum;
          const satisfiesMinFactor = minFactor === undefined || a > minFactor;
          const satisfiesMaxFactor = maxFactor === undefined || c < maxFactor;

          if (satisfiesSum && satisfiesMinFactor && satisfiesMaxFactor) {
            results.push(new Triplet(a, b, c));
          }
        }
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
