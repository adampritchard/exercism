export class Rational {
  public numerator: number;
  public denominator: number;

  constructor(numerator: number, denominator: number) {
    const gcd = greatestCommonDenominator(numerator, denominator);
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;

    // TODO: does this need to be a hardcoded special case?
    if (numerator === 0) this.denominator = 1;

    if (denominator < 0) {
      this.numerator *= -1;
      this.denominator *= -1;
    }
  }

  add(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;

    return new Rational(a1 * b2 + a2 * b1, b1 * b2).reduce();
  }

  sub(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;

    return new Rational(a1 * b2 - a2 * b1, b1 * b2).reduce();
  }

  mul(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;

    return new Rational(a1 * a2, b1 * b2).reduce();
  }

  div(other: Rational): Rational {
    const a1 = this.numerator;
    const b1 = this.denominator;
    const a2 = other.numerator;
    const b2 = other.denominator;

    return new Rational(a1 * b2, a2 * b1).reduce();
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  exprational(n: number): Rational {
    return new Rational(this.numerator ** n, this.denominator ** n);
  }

  expreal(n: number): number {
    return Math.pow(n ** this.numerator, 1.0 / this.denominator);
  }

  reduce(): Rational {
    // Rationals are already reduced. But we create and return a new one for consistency.
    return new Rational(this.numerator, this.denominator);
  }
}

export function greatestCommonDenominator(a: number, b: number): number {
  const min = Math.min(Math.abs(a), Math.abs(b));
  for (let gcd = min; gcd > 0; gcd--) {
    if (a % gcd === 0 && b % gcd === 0) return gcd;
  }

  return 1; 
}
